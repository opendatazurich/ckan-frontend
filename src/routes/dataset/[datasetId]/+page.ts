import type { Load } from '@sveltejs/kit';
import { loadDataset } from '$lib/api';

export const load: Load<{ datasetId: string }> = async ({ params, data }) => {
	return {
		...data,
		...(await loadDataset(params.datasetId))
	};
};
