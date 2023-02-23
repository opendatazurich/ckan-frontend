import { getSchema } from '$lib/api';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad<{ datasetId: string }> = async ({ params }) => {
	// we have to fetch the jsonld server side only, because of CORS.
	const jsonld = await getSchema(params.datasetId);
	return {
		jsonld
	};
};
