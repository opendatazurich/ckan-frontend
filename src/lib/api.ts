export const url = (path: string) => `https://data.stadt-zuerich.ch/api/3/action/${path}`;
export const get = async (path: string) => {
	const res = await fetch(url(path));
	if (res.ok) {
		const data = await res.json();
		return data.result;
	}
	throw new Error(res.statusText);
};
export const pageSize = 20;

export const facets = [
	{ id: 'groups', title: 'Kategorien' },
	{ id: 'tags', title: 'Tags' },
	{ id: 'res_format', title: 'Formate' },
	{ id: 'license_id', title: 'Lizenzen' }
];
export const facetIds = facets.map((facet) => facet.id);

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
		groups.forEach((group) => newQuery.append(key, group));
		return `${path}?${newQuery}`;
	};
};
