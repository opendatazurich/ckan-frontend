<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Theme from '$lib/Theme.svelte';
	import { session } from '$app/stores';
</script>

<svelte:head>
	<link rel="stylesheet" href="/assets/css/critical.min.css" />
	<link rel="preload" href="/assets/css/main.min.css" as="style" />
	<link rel="stylesheet" href="/assets/css/main.min.css" media="all" />
	<link rel="stylesheet" media="print" href="/assets/css/print.css" />
</svelte:head>

<main class="main">
	<Header />

	<slot />

	<Footer />
</main>
