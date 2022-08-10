import { schemaOrgProfile, getSchema } from '$lib/api';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const { datasetId } = params;
	const jsonld = await getSchema(datasetId);
	return { body: jsonld };
};
