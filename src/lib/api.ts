import { error } from '@sveltejs/kit';
import { escape } from '$lib/string';
import { apiUrl, backendUrl, defaultFacets, groupFacets, showcaseFacets } from '$lib/config';
import { makeQuery, mapDataset, mapFacets, mapTags } from './mapping';

// we have to inject the fetch function depending on server side rendering or client
export const api = (fetch: any) => {
	const get = async (path: string) => {
		const res = await fetch(apiUrl(path));

		if (res.ok) {
			const data = await res.json();
			return data.result;
		}
		throw res;
	};

	const getGroupsOverview = async () =>
		get('group_list?all_fields=true&limit=6&sort=package_count');

	const getGroups = (searchParams: URLSearchParams) =>
		get(`group_list?all_fields=true&${searchParams}`);

	const loadResource = async ({
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
			datastore = await get(
				`datastore_search?resource_id=${resourceId}&limit=0&include_total=False`
			);
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

	const getGroup = async (groupId: string) => await get(`group_show?id=${groupId}`);

	const getTags = async () => {
		const { facets } = await get('package_search?facet.field=["tags"]&facet.limit=3&rows=0');
		return mapTags(facets);
	};

	const loadGroupDatasets = async (url: URL, groupId: string) => {
		const data = await loadDatasets(url, groupFacets, `groups:${groupId}`);
		const group = await getGroup(groupId);
		return {
			...data,
			group
		};
	};

	const loadDatasets = async (url: URL, facets = defaultFacets, facetQueryExtension = '') => {
		const { query, page, q } = makeQuery(url, facets, facetQueryExtension);
		const { count, results: datasets, search_facets } = await get(`package_search?${query}`);
		const filters = mapFacets(search_facets, facets, url.searchParams);

		return {
			datasets: datasets.map(mapDataset),
			search_facets,
			count,
			page,
			q,
			filters
		};
	};

	const loadDataset = async (datasetId: string) => {
		const dataset = await get(`package_show?id=${datasetId}`);
		const showcases = await get(`ckanext_package_showcase_list?package_id=${datasetId}`);

		return {
			showcases: showcases.map(mapDataset),
			dataset: mapDataset(dataset)
		};
	};

	const loadShowcases = (url: URL) => loadDatasets(url, showcaseFacets, `dataset_type:showcase`);

	const getShowcase = async (showcaseId: string) => {
		const showcase = await get(`ckanext_showcase_show?id=${showcaseId}`);
		return mapDataset(showcase);
	};

	const getDatasets = async (showcaseId: string) => {
		const datasets = await get(`ckanext_showcase_package_list?showcase_id=${showcaseId}`);
		return datasets.map(mapDataset);
	};

	const loadShowcase = (showcaseId: string) => {
		return {
			showcase: getShowcase(showcaseId),
			datasets: getDatasets(showcaseId)
		};
	};
	const getSearch = async (value: string) => {
		const { results } = await get(`package_search?q=${value}&fq=dataset_type:dataset`);
		return results.map((r: any) => r.title);
	};

	const loadView = async ({ resourceId, viewId }: { resourceId: string; viewId: string }) => {
		const resource = await get(`resource_show?id=${resourceId}`);
		const view = await get(`resource_view_show?id=${viewId}`);

		return {
			baseUrl: backendUrl(),
			resource: `"${escape(JSON.stringify(resource))}"`,
			view: `"${escape(JSON.stringify(view))}"`
		};
	};

	return {
		getGroupsOverview,
		getTags,
		getSearch,
		loadShowcases,
		loadShowcase,
		getGroups,
		loadGroupDatasets,
		loadDatasets,
		loadDataset,
		loadResource,
		loadView
	};
};
