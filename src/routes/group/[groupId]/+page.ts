import { loadGroupDatasets } from '$lib/api';
import type { Load } from '@sveltejs/kit';

export const load: Load<{ groupId: string }> = ({ url, params }) => {
	return loadGroupDatasets(url, params.groupId);
};
