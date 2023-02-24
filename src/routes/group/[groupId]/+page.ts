import { api } from '$lib/api';
import type { Load } from '@sveltejs/kit';

export const load: Load<{ groupId: string }> = ({ url, params, fetch }) => {
	const { loadGroupDatasets } = api(fetch);
	return loadGroupDatasets(url, params.groupId);
};
