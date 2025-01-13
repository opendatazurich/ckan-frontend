import { pageSize, backendUrl } from '$lib/config';
import { marked } from 'marked';
import { removeMarkdown, truncate } from '$lib/string';

export const mapFacets = (search_facets: any[], facets: any[], query: URLSearchParams) => {
	return facets
		.map((facet) => ({ ...facet, items: query.getAll(facet.id) }))
		.map((facet) => {
			const facetItems = search_facets[facet.id]?.items;
			const items = facet.items.map((item: string) =>
				facetItems.find((i: { name: string }) => i.name === item)
			);
			return { ...facet, items };
		})
		.filter((facet) => facet.items.length);
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

const normalizeUrl = (url: string) => {
	url = url || '';
	return url.startsWith('http') ? url : backendUrl(`uploads/showcase/${url}`);
};

export const mapDataset = (dataset: any) => {
	return {
		...dataset,
		groups: dataset.groups.map(mapGroup),
		normalized_image_url: normalizeUrl(dataset.image_url),
		html_notes: marked(dataset.notes),
		truncated_notes: truncate(removeMarkdown(dataset.notes), 180),
		truncated_title: truncate(dataset.title, 80)
	};
};

export const mapGroup = (group: any) => {
	return {
		...group,
		image_url: group.image_display_url
	};
};

export const mapTags = (facets: { tags: Map<string, number> }) =>
	Object.entries(facets.tags)
		.sort((a, b) => b[1] - a[1])
		.map(([key]) => key);

export const makeQuery = (url: URL, facets: any[], facetQueryExtension: string) => {
	const q = url.searchParams.get('q') || '';
	const page = +(url.searchParams.get('page') || '1');
	const start = (page - 1) * pageSize;
	const facetIds = facets.map((facet) => facet.id);

	const query = new URLSearchParams();
	query.set('q', q);
	query.set('sort', url.searchParams.get('sort') || '');
	query.set('rows', `${pageSize}`);
	query.set('start', `${start}`);
	query.set('facet.field', `${JSON.stringify(facetIds)}`);
	query.set('facet', 'true');

	const facetQuery = [
		...facets
			.map((facet) => ({ ...facet, items: url.searchParams.getAll(facet.id) }))
			.filter((facet) => facet.items.length)
			.map(
				(facet) => `${facet.id}:(${facet.items.map((item: string) => `"${item}"`).join(' AND ')})`
			),
		facetQueryExtension
	].join(' AND ');

	query.set('fq', facetQuery);

	return { query, page, q };
};
