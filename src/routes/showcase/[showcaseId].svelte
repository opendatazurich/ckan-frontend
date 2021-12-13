<script context="module" lang="ts">
	export { loadShowcase as load } from '$lib/api';
</script>

<script lang="ts">
	import Page from '$lib/Page.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import Toolbar from '$lib/Toolbar.svelte';

	export let showcase;
</script>

<Page>
	<Toolbar
		links={[
			['/showcase', 'Showcases'],
			[`/showcase/${showcase.name}`, showcase.title]
		]}
	/>
	<PageTitle>
		{showcase.title}
	</PageTitle>

	<img src={showcase.normalized_image_url} alt={showcase.title} />
	<div>
		{@html showcase.html_notes}
	</div>
</Page>

<style>
	img {
		width: 100%;
		padding: 1em 0;
	}
</style>
