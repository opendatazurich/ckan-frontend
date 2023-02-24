import { api } from '$lib/api';
import type { Load } from '@sveltejs/kit';

export const load: Load<{ resourceId: string; datasetId: string }> = async ({ params, fetch }) => {
	const { loadResource } = api(fetch);
	return loadResource(params);
};
