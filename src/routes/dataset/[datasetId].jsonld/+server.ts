import { json, type RequestHandler } from '@sveltejs/kit';
import { getSchema } from '$lib/api';

export const GET: RequestHandler<{ datasetId: string }> = async ({ params }) => {
	const { datasetId } = params;
	const jsonld = await getSchema(datasetId);
	return json(jsonld);
};
