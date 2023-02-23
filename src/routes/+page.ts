import type { Load } from '@sveltejs/kit';
import { getGroups, getTags } from '$lib/api';

export const load: Load = async () => {
	return {
		groups: getGroups(),
		tags: getTags()
	};
};
