<script context="module" lang="ts">
	export { loadShowcase as load } from '$lib/api';
</script>

<script lang="ts">
	import DatasetList from '$lib/DatasetList.svelte';
	import DatasetTags from '$lib/DatasetTags.svelte';

	import Page from '$lib/Page.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import Toolbar from '$lib/Toolbar.svelte';

	export let showcase;
	export let datasets;
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

	<h3>Beschreibung</h3>
	<div>
		{@html showcase.html_notes}
	</div>

	{#if showcase.author}
		<h3>Author</h3>
		<p>{showcase.author}</p>
	{/if}

	<h3>Webseite</h3>
	<a href={showcase.url}>{showcase.url}</a>

	<DatasetTags path="/showcase" dataset={showcase} />
	{#if datasets.length > 0}
		<div class="mod_search">
			<h3>Datensätze</h3>
			<DatasetList pathPrefix="/dataset" {datasets} />
		</div>
	{/if}
</Page>

<style>
	img {
		width: 100%;
		padding: 1em 0;
	}
</style>
