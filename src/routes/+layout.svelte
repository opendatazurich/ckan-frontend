<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import { Analytics, Footer, Header } from '$lib/components';
	export let data: LayoutData;

	export const robotsDirective = import.meta.env.VITE_ROBOTS_DIRECTIVE || '';
</script>

<svelte:head>
	<meta name="robots" content={robotsDirective} />
</svelte:head>

<Header isStaging={data.isStaging} />
<main>
	<slot />
</main>
<Footer />
<Analytics />
