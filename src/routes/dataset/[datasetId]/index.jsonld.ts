import { getBackend, schemaOrgProfile } from '$lib/api';

export const get: RequestHandler = async ({ params }) => {
   const { datasetId } = params;
   const jsonld = await getBackend(`dataset/${datasetId}.jsonld?profile=${schemaOrgProfile}`);
   return { body: jsonld }
}
