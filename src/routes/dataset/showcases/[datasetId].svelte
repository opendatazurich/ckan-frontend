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

	export let dataset;
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
					<h2>
						Showcases featuring Daten der Verkehrszählung zum motorisierten Individualverkehr
						(Stundenwerte), seit 2012
					</h2>

					<ul
						class="media-grid"
						data-module="media-grid"
						style="position: relative; height: 311.109px;"
					>
						<li class="media-item" style="position: absolute; left: 0px; top: 0px;">
							<img
								src="https://data.stadt-zuerich.ch/uploads/showcase/2020-04-20-121013.997024mivzuerich.png"
								alt="vehrkehrsaufkommen-in-zurich"
								class="media-image"
							/>

							<h3 class="media-heading">
								<a href="/showcase/vehrkehrsaufkommen-in-zurich">Vehrkehrsaufkommen in Zürich</a>
							</h3>

							<div>Visualisierung des Verkehrsaufkommens in Zürich über den Tag verteilt.</div>

							<strong class="count">1 Datensatz</strong>

							<a
								href="/showcase/vehrkehrsaufkommen-in-zurich"
								title="View Vehrkehrsaufkommen in Zürich"
								class="media-view"
							>
								<span>View Vehrkehrsaufkommen in Zürich</span>
							</a>
						</li>
					</ul>
				</div>
			</article>
		</div>

		<aside class="secondary span3">
			<DatasetLicense {dataset} />
		</aside>
	</div>
</Page>
