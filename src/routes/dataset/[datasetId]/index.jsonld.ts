import { schemaOrgProfile, getSchema } from '$lib/api';

export const get: RequestHandler = async ({ params }) => {
   const { datasetId } = params;
   const jsonld = await getSchema(datasetId);
   return { body: jsonld }
}
