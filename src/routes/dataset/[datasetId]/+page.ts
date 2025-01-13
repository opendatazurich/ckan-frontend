import type { Load } from '@sveltejs/kit';
import { api } from '$lib/api';

export const load: Load<{ datasetId: string }> = async ({ params, data, fetch }) => {
	const { loadDataset } = api(fetch);
	return {
		...data,
		...(await loadDataset(params.datasetId))
	};
};
