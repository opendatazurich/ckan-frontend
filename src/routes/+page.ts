import type { Load } from '@sveltejs/kit';
import { api } from '$lib/api';

export const load: Load = async ({ fetch }) => {
	const { getGroupsOverview, getTags } = api(fetch);
	const [groups, tags] = await Promise.all([
		getGroupsOverview(),
		getTags()
	]);

	return {
		groups,
		tags
	};
};
