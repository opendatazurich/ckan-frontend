import type { Load } from '@sveltejs/kit';
import { api } from '$lib/api';

export const load: Load = async ({ fetch }) => {
	const { getGroupsOverview, getTags } = api(fetch);
	return {
		groups: getGroupsOverview(),
		tags: getTags()
	};
};
