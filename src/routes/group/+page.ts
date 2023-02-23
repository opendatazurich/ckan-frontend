import { loadGroups } from '$lib/api';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ url }) => {
	return loadGroups(url.searchParams);
};
