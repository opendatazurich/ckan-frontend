import type { GetSession } from '@sveltejs/kit';

export const getSession: GetSession = () => {
	return {
		themeColor: process.env['THEME_COLOR']
	};
};
