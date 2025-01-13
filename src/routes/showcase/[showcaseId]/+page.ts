import type { Load } from '@sveltejs/kit';
import { api } from '$lib/api';

export const load: Load<{ showcaseId: string }> = async ({ params, fetch }) => {
	const { loadShowcase } = api(fetch);
	return loadShowcase(params.showcaseId);
};
