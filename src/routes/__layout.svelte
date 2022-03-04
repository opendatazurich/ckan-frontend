<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="/assets/css/critical.min.css" />
	<link rel="preload" href="/assets/css/main.min.css" as="style" />
	<link rel="stylesheet" href="/assets/css/main.min.css" media="all" />
	<link rel="stylesheet" href="/assets/css/fonts.css" media="all" />
	<link rel="stylesheet" media="print" href="/assets/css/print.css" />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(html) {
		--color-zuriblau: #0f05a0;
		--color-active: #070250;
		--color-grey-80: #606060;
		--color-grey-70: #606060;
		--color-grey-input: #999999;
		--color-zh-grey-3: #dedede;
		--color-grey-20: #e8e8e8;
		--color-black: #000000;
		--color-white: #ffffff;
		--color-stage: var(--color-white);
	}
</style>
