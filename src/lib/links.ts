const link = (href: string, title: string, icon: string, path: string) => ({
	href,
	title,
	icon,
	active: href === path
});

export const getDatasetLinks = (datasetId: string, path: string) => [
	link(`/dataset/${datasetId}`, 'Datensatz', 'sitemap', path),
	link(`/dataset/groups/${datasetId}`, 'Kategorien', 'users', path),
	link(`/dataset/showcases/${datasetId}`, 'Showcases', 'picture', path)
];

export const getGroupLinks = (groupId: string, path: string) => [
	link(`/group/${groupId}`, 'Datensatz', 'sitemap', path),
	link(`/group/about/${groupId}`, 'Über', 'info-circle', path)
];
