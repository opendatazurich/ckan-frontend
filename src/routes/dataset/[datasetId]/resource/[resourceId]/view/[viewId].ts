import type { RequestHandler } from '@sveltejs/kit';
import view from './_view.ejs?raw';
import ejs from 'ejs';
import { loadDataset } from '$lib/api';

const template = ejs.compile(view);

export const get: RequestHandler = async ({ params }) => {
	const { datasetId, resourceId, viewId } = params;

	// loadDataset({ page })

	const body = template({
		baseUrl: 'https://data.stadt-zuerich.ch/'
	});
	return {
		body
	};
};
