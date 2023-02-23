import type { Load } from '@sveltejs/kit';
import { loadShowcase } from '$lib/api';

export const load: Load<{ showcaseId: string }> = async ({ params }) => {
	return loadShowcase(params.showcaseId);
};
