import type { RequestHandler } from '@sveltejs/kit';
import view from './_view.ejs?raw';
import ejs from 'ejs';
import { get as apiGet } from '$lib/api';
import { escape } from '$lib/string';

const template = ejs.compile(view);

export const get: RequestHandler = async ({ params }) => {
	const { resourceId, viewId } = params;

	const view = await apiGet(`resource_view_show?id=${viewId}`);
	const resource = await apiGet(`resource_show?id=${resourceId}`);

	const body = template({
		baseUrl: 'https://data.stadt-zuerich.ch/',
		resource: `"${escape(JSON.stringify(resource))}"`,
		view: `"${escape(JSON.stringify(view))}"`
	});
	return {
		body
	};
};
