const link = (href, title, icon, path) => ({ href, title, icon, active: href === path });

export const getDatasetLinks = (datasetId, path) => [
	link(`/dataset/${datasetId}`, 'Datensatz', 'sitemap', path),
	link(`/dataset/groups/${datasetId}`, 'Kategorien', 'users', path),
	link(`/dataset/showcases/${datasetId}`, 'Showcases', 'picture', path)
];

export const getGroupLinks = (groupId, path) => [
	link(`/group/${groupId}`, 'Datensatz', 'sitemap', path),
	link(`/group/about/${groupId}`, 'Über', 'info-circle', path)
];
