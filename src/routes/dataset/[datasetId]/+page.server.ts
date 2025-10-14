import { api } from '$lib/api.server';
import { backendUrl } from '$lib/config';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad<{ datasetId: string }> = async ({ params, fetch }) => {
	const { getSchema } = api(fetch);

	// we have to fetch the jsonld server side only, because of CORS.
	const jsonld = await getSchema(params.datasetId);

	// Calling the CKAN-dataset-page in the background as this will trigger creating default previews
	const datasetId = params.datasetId;
	const datasetBackendUrl = backendUrl(`dataset/${datasetId}`);

	// Fire-and-forget the background call
	fetch(datasetBackendUrl).catch((err) => {
		console.error(`Failed to ping ${datasetBackendUrl}`, err);
	});

	return {
		jsonld
	};
};
