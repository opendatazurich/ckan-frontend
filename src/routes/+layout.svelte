<script lang="ts">
	import '../app.css';
	import { env } from '$env/dynamic/public';
	import type { LayoutData } from './$types';
	import { Analytics, Footer, Header } from '$lib/components';
	export let data: LayoutData;

	export const robotsDirective = env.PUBLIC_ROBOTS_DIRECTIVE || '';
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
