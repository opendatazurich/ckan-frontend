<script lang="ts">
	import type { PageData } from './$types';
	import { DatasetList, DatasetTags, Page, PageTitle, Toolbar } from '$lib/components';

	export let data: PageData;

	$: ({ showcase, datasets } = data);
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

	<div class="mod_search">
		<h3>Datensätze</h3>
		<DatasetList pathPrefix="/dataset" {datasets} />
	</div>
</Page>

<style>
	img {
		width: 100%;
		padding: 1em 0;
	}
</style>
