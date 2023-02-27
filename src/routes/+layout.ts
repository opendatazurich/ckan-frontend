import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	return {
		isStaging: url.hostname.includes('integ')
	};
};
