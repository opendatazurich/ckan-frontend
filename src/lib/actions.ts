/** click outside of node trigges cb */
export function clickOutside(node: any, cb: (node: any) => void) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			cb(node);
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
