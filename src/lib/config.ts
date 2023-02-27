const ckanUrl = import.meta.env.VITE_CKAN_URL || 'https://data.stadt-zuerich.ch';
export const schemaOrgProfile = import.meta.env.VITE_SCHEMA_ORG_PROFILE || 'stadtzh_schemaorg';
export const pageSize = 20;
export const defaultFacets = [
	{ id: 'groups', title: 'Kategorien' },
	{ id: 'tags', title: 'Tags' },
	{ id: 'res_format', title: 'Formate' },
	{ id: 'license_id', title: 'Lizenzen' }
];
export const showcaseFacets = [{ id: 'tags', title: 'Tags' }];
export const groupFacets = [
	{ id: 'tags', title: 'Tags' },
	{ id: 'res_format', title: 'Formate' },
	{ id: 'license_id', title: 'Lizenzen' }
];
export const apiUrl = (path: string) => `${ckanUrl}/api/3/action/${path}`;
export const backendUrl = (path = '') => `${ckanUrl}/${path}`;
