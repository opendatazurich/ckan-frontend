import { cubicOut } from 'svelte/easing';

export function flyX(_, { delay = 0, duration = 300, easing = cubicOut } = {}) {
	return {
		delay,
		duration,
		easing,
		css: (_, u) => `transform: translateX(${u * 100}%);`
	};
}
