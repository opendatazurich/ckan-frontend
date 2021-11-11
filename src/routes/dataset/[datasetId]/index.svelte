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
	import DatasetToolbar from '$lib/DatasetToolbar.svelte';
	import DatasetNotes from '$lib/DatasetNotes.svelte';
	import DatasetResources from '$lib/DatasetResources.svelte';
	import DatasetTags from '$lib/DatasetTags.svelte';
	import DatasetInfo from '$lib/DatasetInfo.svelte';
	import Page from '$lib/Page.svelte';

	export let dataset = {} as any;
</script>

<Page>
	<DatasetToolbar {dataset} />

	<div class="row wrapper">
		<div class="primary span9">
			<article class="module">
				<DatasetHeader {dataset} />

				<div class="module-content">
					<h1>
						{dataset.title}
					</h1>
					<DatasetNotes notes={dataset.notes} />
					<DatasetResources {dataset} />
					<DatasetTags {dataset} />
					<DatasetInfo {dataset} />
				</div>
			</article>
		</div>

		<aside class="secondary span3">
			<DatasetLicense {dataset} />
		</aside>
	</div>
</Page>
