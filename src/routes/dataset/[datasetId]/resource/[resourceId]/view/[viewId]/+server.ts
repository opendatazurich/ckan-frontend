import type { RequestHandler } from '@sveltejs/kit';
import view from '../_view.ejs?raw';
import ejs from 'ejs';
import { api } from '$lib/api';

const template = ejs.compile(view);

export const GET: RequestHandler<{ resourceId: string; viewId: string }> = async ({
	params,
	fetch
}) => {
	const { loadView } = api(fetch);

	const data = await loadView(params);
	const body = template(data);

	return new Response(body, {
		headers: {
			'Content-Type': 'text/html'
		}
	});
};
