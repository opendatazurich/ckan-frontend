<script lang="ts">
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';

	onMount(() => {
		if (env.PUBLIC_ANALYTICS_SRC) {
			var script = document.createElement('script');
			script.onload = () => {
				(window as any)._satellite.pageBottom();
			};
			script.src = env.PUBLIC_ANALYTICS_SRC;
			document.body.appendChild(script);
		}
	});
</script>
