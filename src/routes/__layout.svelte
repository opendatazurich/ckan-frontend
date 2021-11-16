<script>
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

<main class="main">
	<Header />

	<slot />

	<Footer />
</main>
