<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { loadDataset } from '$lib/api';
	export const load: Load = ({ page }) => {
		return loadDataset(page.params.datasetId);
	};
</script>

<script lang="ts">
	import DatasetHeader from '$lib/DatasetHeader.svelte';
	import DatasetLicense from '$lib/DatasetLicense.svelte';
	import DatasetNotes from '$lib/DatasetNotes.svelte';
	import DatasetResources from '$lib/DatasetResources.svelte';
	import DatasetTags from '$lib/DatasetTags.svelte';
	import DatasetInfo from '$lib/DatasetInfo.svelte';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import { truncate } from '$lib/string';
	import PageTitle from '$lib/PageTitle.svelte';

	export let dataset = {} as any;
</script>

<Page>
	<Toolbar
		links={[
			['/dataset', 'Datensätze'],
			[`/dataset/${dataset.name}`, truncate(dataset.title, 28, ' ...')]
		]}
	/>
	<PageTitle>{dataset.title}</PageTitle>
	<DatasetHeader />
	<DatasetNotes notes={dataset.notes} />
	<DatasetTags {dataset} />
	<DatasetLicense {dataset} />
	<h2 id="dataset">Datensatz</h2>
	<DatasetResources {dataset} />
	<DatasetInfo {dataset} />
	<h2 id="category">Kategorien</h2>
	<h2 id="showcase">Showcases</h2>
</Page>
