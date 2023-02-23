import { loadResource } from '$lib/api';
import type { Load } from '@sveltejs/kit';

export const load: Load<{ resourceId: string; datasetId: string }> = async ({ params }) => {
	return loadResource(params);
};
