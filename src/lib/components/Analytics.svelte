<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		if (import.meta.env.VITE_ANALYTICS_SRC) {
			var script = document.createElement('script');
			script.onload = () => {
				(window as any)._satellite.pageBottom();
			};
			script.src = import.meta.env.VITE_ANALYTICS_SRC;
			document.body.appendChild(script);
		}
	});
</script>
