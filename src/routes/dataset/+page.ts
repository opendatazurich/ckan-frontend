import { defaultFacets, loadDatasets } from '$lib/api';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ url }) => {
	return loadDatasets(url, defaultFacets);
};
