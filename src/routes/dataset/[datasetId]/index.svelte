<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { get } from '$lib/api';

	export const load: Load = async ({ page }) => {
		const { datasetId } = page.params;
		const dataset = await get(`package_show?id=${datasetId}`);
		return {
			props: {
				dataset
			}
		};
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

	export let dataset = {} as any;
</script>

<div role="main">
	<div id="content" class="container">
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
						<DatasetResources />
						<DatasetTags />
						<DatasetInfo />
					</div>
				</article>
			</div>

			<aside class="secondary span3">
				<DatasetLicense {dataset} />
			</aside>
		</div>
	</div>
</div>
