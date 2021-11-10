<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Theme from '$lib/Theme.svelte';
	import { session } from '$app/stores';
</script>

<Theme --theme-color={$session.themeColor}>
	<Header />
	<slot />
	<Footer />
</Theme>
