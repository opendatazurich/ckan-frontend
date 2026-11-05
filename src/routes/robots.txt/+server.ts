import { env } from '$env/dynamic/public';
import type { RequestHandler } from '@sveltejs/kit';

const disallowAll = `User-agent: *
Disallow: /
`;

const production = `User-agent: *
Disallow: /api/
Disallow: /dataset/*/resource/*/view/
`;

export const GET: RequestHandler = () => {
	const noindex = (env.PUBLIC_ROBOTS_DIRECTIVE || '').toLowerCase().includes('noindex');

	return new Response(noindex ? disallowAll : production, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
