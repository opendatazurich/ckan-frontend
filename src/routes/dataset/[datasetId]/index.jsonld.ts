import {getBackend} from '$lib/api';

export const get: RequestHandler = async ({ params }) => {
   const { datasetId } = params;
   const body = await getBackend(`dataset/${datasetId}.jsonld?profile=schemaorg`);
   return {body}
}