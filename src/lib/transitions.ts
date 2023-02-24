import { cubicOut } from 'svelte/easing';

export function flyX(_: any, { delay = 0, duration = 300, easing = cubicOut } = {}) {
	return {
		delay,
		duration,
		easing,
		css: (_: number, u: number) => `transform: translateX(${u * 100}%);`
	};
}
