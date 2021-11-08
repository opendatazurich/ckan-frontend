import type { Load } from '@sveltejs/kit';

export const url = (path: string) => `https://data.stadt-zuerich.ch/api/3/action/${path}`;
export const pageSize = 20;

export const defaultFacets = [
	{ id: 'groups', title: 'Kategorien' },
	{ id: 'tags', title: 'Tags' },
	{ id: 'res_format', title: 'Formate' },
	{ id: 'license_id', title: 'Lizenzen' }
];

export const get = async (path: string) => {
	const res = await fetch(url(path));
	if (res.ok) {
		const data = await res.json();
		return data.result;
	}
	throw new Error(res.statusText);
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

export const loadDataset: Load = async ({ page }) => {
	const { datasetId } = page.params;
	const dataset = await get(`package_show?id=${datasetId}`);
	return {
		props: {
			dataset
		}
	};
};

export const loadGroup: Load = async ({ page }) => {
	const { groupId } = page.params;
	const group = await get(`group_show?id=${groupId}`);
	return {
		props: {
			group
		}
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
	const load: Load = async ({ page }) => {
		const facetIds = facets.map((facet) => facet.id);

		const pageIndex = +(page.query.get('page') || '1');
		const q = page.query.get('q') || '';
		const start = (pageIndex - 1) * pageSize;

		const newQuery = new URLSearchParams();
		newQuery.set('q', q);
		newQuery.set('sort', page.query.get('sort') || '');
		newQuery.set('rows', `${pageSize}`);
		newQuery.set('start', `${start}`);
		newQuery.set('facet.field', `${JSON.stringify(facetIds)}`);
		newQuery.set('facet', 'true');

		const facetQuery = [
			...facets
				.map((facet) => ({ ...facet, items: page.query.getAll(facet.id) }))
				.filter((facet) => facet.items.length)
				.map((facet) => `${facet.id}:(${facet.items.join(' AND ')})`),
			facetQueryExtension
		].join(' AND ');

		newQuery.set('fq', facetQuery);

		const { count, results: datasets, search_facets } = await get(`package_search?${newQuery}`);

		const filters = processFacets(search_facets, facets, page.query);
		return {
			props: {
				datasets,
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

export const loadDatasets = makeLoadDatasets(defaultFacets);
export const loadGroupDatasets = makeLoadDatasets(defaultFacets.slice(1), 'groups:bildung');
