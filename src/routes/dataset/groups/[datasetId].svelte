<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { loadDataset } from '$lib/api';
	export const load: Load = ({ page }) => {
		return loadDataset(page.params.datasetId);
	};
</script>

<script lang="ts">
	import DatasetLicense from '$lib/DatasetLicense.svelte';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import { truncate } from '$lib/string';
	import DatasetHeader from '$lib/DatasetHeader.svelte';

	export let dataset = {} as { groups: any[]; name: string; title: string };
</script>

<Page>
	<Toolbar
		links={[
			['/dataset', 'Datensätze'],
			[`/dataset/${dataset.name}`, truncate(dataset.title, 28, ' ...')]
		]}
	/>

	<div class="row wrapper">
		<div class="primary span9">
			<article class="module">
				<DatasetHeader />

				<div class="module-content">
					<h2 class="hide-heading">Kategorien</h2>

					<ul
						class="media-grid media-grid-zh"
						style="position: relative; width: 468px; height: 196.391px;"
					>
						{#each dataset.groups as group}
							<li class="media-item media-item-zh">
								<img src={group.image_display_url} alt={group.name} class="media-image" />

								<h3 class="media-heading">{group.display_name}</h3>

								<a
									href="/group/{group.name}"
									title="{group.display_name} ansehen"
									class="media-view"
								>
									<span>{group.display_name} ansehen</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</article>
		</div>

		<aside class="secondary span3">
			<DatasetLicense {dataset} />
		</aside>
	</div>
</Page>
