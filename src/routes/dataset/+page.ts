import { api } from '$lib/api';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ url, fetch }) => {
	const { loadDatasets } = api(fetch);
	return loadDatasets(url);
};
