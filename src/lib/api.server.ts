import { backendUrl, schemaOrgProfile } from '$lib/config';

// server side only api calls, due to CORS
export const api = (fetch: any) => {
	const getSchema = async (datasetId: string) => {
		const res = await fetch(backendUrl(`dataset/${datasetId}.jsonld?profile=${schemaOrgProfile}`));
		if (res.ok) {
			return await res.json();
		}
		throw res;
	};

	return {
		getSchema
	};
};
