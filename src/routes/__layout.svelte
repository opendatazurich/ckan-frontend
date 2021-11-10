<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Theme from '$lib/Theme.svelte';

	const envColor = import.meta.env.VITE_THEME_COLOR;
</script>

<Theme --env-color={envColor}>
	<Header />
	<slot />
	<Footer />
</Theme>
