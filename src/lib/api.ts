import { error, type Load } from '@sveltejs/kit';
import { removeMarkdown, truncate } from '$lib/string';
import { marked } from 'marked';
import type { GroupType } from './types';

export const ckanUrl = import.meta.env.VITE_CKAN_URL || 'https://data.stadt-zuerich.ch';
export const schemaOrgProfile = import.meta.env.VITE_SCHEMA_ORG_PROFILE || 'stadtzh_schemaorg';
export const apiUrl = (path: string) => `${ckanUrl}/api/3/action/${path}`;
export const backendUrl = (route: string) => `${ckanUrl}${route}`;
export const schemaOrgPath = (datasetId: string) =>
	`/dataset/${datasetId}.jsonld?profile=${schemaOrgProfile}`;

export const pageSize = 20;

export const defaultFacets = [
	{ id: 'groups', title: 'Kategorien' },
	{ id: 'tags', title: 'Tags' },
	{ id: 'res_format', title: 'Formate' },
	{ id: 'license_id', title: 'Lizenzen' }
];
export const showcaseFacets = [{ id: 'tags', title: 'Tags' }];
const groupFacets = defaultFacets.slice(1);

export const get = async (path: string) => {
	const res = await fetch(apiUrl(path));

	if (res.ok) {
		const data = await res.json();
		return data.result;
	}
	throw res;
};

export const getSchema = async (datasetId: string) => {
	const res = await fetch(backendUrl(schemaOrgPath(datasetId)));
	if (res.ok) {
		return await res.json();
	}
	throw res;
};

export const makeFilterUrl = (path: string, query: URLSearchParams) => {
	return (key: string, name: string) => {
		const newQuery = new URLSearchParams(query);
		let groups = newQuery.getAll(key);
		if (groups.includes(name)) {
			groups = groups.filter((g) => g !== name);
		} else {
			groups.push(name);
		}
		newQuery.delete(key);
		newQuery.delete('page');
		groups.forEach((group) => newQuery.append(key, group));
		return `${path}?${newQuery}`;
	};
};

export const loadGroup = async (groupId: string) => {
	const data = (await loadGroupDatasets(groupId)(args)) as any;

	data.props.group = ((await loadGroupOld(args)) as any).props.group;
	return data;
};

export const loadGroups = async (searchParams: URLSearchParams) => {
	const res = await fetch(apiUrl(`group_list?all_fields=true&${searchParams}`));
	const data = await res.json();
	return {
		groups: data.result as GroupType[]
	};
};

export const loadResource = async ({
	resourceId,
	datasetId
}: {
	resourceId: string;
	datasetId: string;
}) => {
	const { showcase, dataset } = (await loadDataset(datasetId)) as any;

	const resource = dataset.resources.find((resource: any) => resource.id == resourceId);
	if (!resource) {
		throw error(404, `Resource "${resourceId}" wurde nicht gefunden.`);
	}

	let datastore = null;
	if (resource.datastore_active) {
		datastore = await get(`datastore_search?resource_id=${resourceId}&limit=0&include_total=False`);
	}

	let viewId = null;
	if (datastore) {
		const views = await get(`resource_view_list?id=${resourceId}`);
		viewId = views[0].id;
	}

	return {
		dataset,
		showcase,
		resource,
		datastore,
		viewId
	};
};

const processFacets = (search_facets, facets, query: URLSearchParams) => {
	return facets
		.map((facet) => ({ ...facet, items: query.getAll(facet.id) }))
		.map((facet) => {
			const facetItems = search_facets[facet.id]?.items;
			const items = facet.items.map((item) => facetItems.find((i) => i.name === item));
			return { ...facet, items };
		})
		.filter((facet) => facet.items.length);
};

const makeLoadDatasets = (facets, facetQueryExtension = '') => {
	const load: Load = async ({ url }) => {
		const facetIds = facets.map((facet) => facet.id);

		const pageIndex = +(url.searchParams.get('page') || '1');
		const q = url.searchParams.get('q') || '';
		const start = (pageIndex - 1) * pageSize;

		const newQuery = new URLSearchParams();
		newQuery.set('q', q);
		newQuery.set('sort', url.searchParams.get('sort') || '');
		newQuery.set('rows', `${pageSize}`);
		newQuery.set('start', `${start}`);
		newQuery.set('facet.field', `${JSON.stringify(facetIds)}`);
		newQuery.set('facet', 'true');

		const facetQuery = [
			...facets
				.map((facet) => ({ ...facet, items: url.searchParams.getAll(facet.id) }))
				.filter((facet) => facet.items.length)
				.map((facet) => `${facet.id}:(${facet.items.map((item) => `"${item}"`).join(' AND ')})`),
			facetQueryExtension
		].join(' AND ');

		newQuery.set('fq', facetQuery);

		const { count, results: datasets, search_facets } = await get(`package_search?${newQuery}`);

		const filters = processFacets(search_facets, facets, url.searchParams);
		return {
			props: {
				datasets: datasets.map(mapDataset),
				search_facets,
				count,
				page: pageIndex,
				q,
				filters
			}
		};
	};
	return load;
};

export const loadGroupOld = async (groupId: string) => await get(`group_show?id=${groupId}`);

export const loadGroupDatasets = async (url: URL, groupId: string) => {
	const data = await loadDatasets(url, groupFacets, `groups:${groupId}`);
	const group = await loadGroupOld(groupId);
	return {
		...data,
		group
	};
};

const getUrl = (path: string) => `${ckanUrl}/uploads/showcase/${path}`;

function normalizeUrl(url: string) {
	url = url || '';
	return url.startsWith('http') ? url : getUrl(url);
}

function mapDataset(dataset) {
	return {
		...dataset,
		groups: dataset.groups.map(mapGroup),
		normalized_image_url: normalizeUrl(dataset.image_url),
		html_notes: marked(dataset.notes),
		truncated_notes: truncate(removeMarkdown(dataset.notes), 180),
		truncated_title: truncate(dataset.title, 80)
	};
}

function mapGroup(group) {
	return {
		...group,
		image_url: group.image_display_url
	};
}

// fix

export const getGroups = async () => get('group_list?all_fields=true&limit=6&sort=package_count');

export const getTags = async () => {
	const { facets } = await get('package_search?facet.field=["tags"]&facet.limit=3&rows=0');
	return Object.entries(facets.tags as Map<string, number>)
		.sort((a, b) => b[1] - a[1])
		.map(([key]) => key);
};

export const getShowcase = (showcaseId: string) => get(`ckanext_showcase_show?id=${showcaseId}`);

export const getDatasets = (showcaseId: string) =>
	get(`ckanext_showcase_package_list?showcase_id=${showcaseId}`);

export const loadDatasets = async (url: URL, facets: any[], facetQueryExtension = '') => {
	const facetIds = facets.map((facet) => facet.id);

	const pageIndex = +(url.searchParams.get('page') || '1');
	const q = url.searchParams.get('q') || '';
	const start = (pageIndex - 1) * pageSize;

	const newQuery = new URLSearchParams();
	newQuery.set('q', q);
	newQuery.set('sort', url.searchParams.get('sort') || '');
	newQuery.set('rows', `${pageSize}`);
	newQuery.set('start', `${start}`);
	newQuery.set('facet.field', `${JSON.stringify(facetIds)}`);
	newQuery.set('facet', 'true');

	const facetQuery = [
		...facets
			.map((facet) => ({ ...facet, items: url.searchParams.getAll(facet.id) }))
			.filter((facet) => facet.items.length)
			.map((facet) => `${facet.id}:(${facet.items.map((item) => `"${item}"`).join(' AND ')})`),
		facetQueryExtension
	].join(' AND ');

	newQuery.set('fq', facetQuery);

	const { count, results: datasets, search_facets } = await get(`package_search?${newQuery}`);

	const filters = processFacets(search_facets, facets, url.searchParams);

	return {
		datasets: datasets.map(mapDataset),
		search_facets,
		count,
		page: pageIndex,
		q,
		filters
	};
};

export const loadDataset = async (datasetId: string) => {
	const dataset = await get(`package_show?id=${datasetId}`);
	const showcases = await get(`ckanext_package_showcase_list?package_id=${datasetId}`);
	//const jsonld = await getSchema(datasetId);
	//const res = await fetch(schemaOrgPath(datasetId));

	return {
		showcases: showcases.map(mapDataset),
		dataset: mapDataset(dataset)
		//jsonld: jsonld
	};
};

export const loadShowcases = (url: URL) =>
	loadDatasets(url, showcaseFacets, `dataset_type:showcase`);

export const loadShowcase = async (showcaseId: string) => {
	const showcase = await get(`ckanext_showcase_show?id=${showcaseId}`);
	const datasets = await get(`ckanext_showcase_package_list?showcase_id=${showcaseId}`);
	return {
		showcase: mapDataset(showcase),
		datasets: datasets.map(mapDataset)
	};
};
