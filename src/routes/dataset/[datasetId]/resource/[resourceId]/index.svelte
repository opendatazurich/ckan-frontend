<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { loadDataset, get } from '$lib/api';

	export const load: Load = async (args) => {
		const resourceId = args.page.params.resourceId;
		const { props } = (await loadDataset(args.page.params.datasetId)) as any;

		const resource = props.dataset.resources.find((resource) => resource.id === resourceId);
		if (!resource) {
			return {
				status: 404,
				error: `Resource "${resourceId}" wurde nicht gefunden.`
			};
		}

		let datastore = null;
		try {
			datastore = await get(
				`datastore_search?resource_id=${resourceId}&limit=0&include_total=False`
			);
		} catch (err) {
			// 404 are expected if there is no datastore
			if (err.status !== 404) {
				throw err;
			}
		}

		return {
			props: {
				...props,
				resource,
				datastore
			}
		};
	};
</script>

<script lang="ts">
	import marked from 'marked';
	import ResourceInfo from '$lib/ResourceInfo.svelte';
	import ResourceList from '$lib/ResourceList.svelte';
	import { truncate } from '$lib/string';
	import { getType } from '$lib/dataTypes';
	import ApiButton from '$lib/ApiButton.svelte';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import TwoColumn from '$lib/TwoColumn.svelte';

	export let dataset = {} as { name: string; title: string; resources: any[] };
	export let resource = {} as any;
	export let datastore = {} as any;
	$: type = getType(resource.format);
	$: hasApi = resource.resource_type === 'api';
	$: hasDataset = datastore && !hasApi;
</script>

<Page>
	<Toolbar
		links={[
			['/dataset', 'Datensätze'],
			[`/dataset/${dataset.name}`, truncate(dataset.title, 28, ' ...')],
			[
				`/dataset/${dataset.name}/resource/${resource.id}`,
				truncate(resource.name, 28, ' ...', false)
			]
		]}
	/>

	<Page>
		<TwoColumn>
			<PageTitle>{resource.name}</PageTitle>
			<div class="module-content">
				<div class="actions">
					<ul>
						{#if hasDataset}
							<li>
								<a
									class="btn btn-primary resource-url-analytics resource-type-file"
									href={resource.url}
								>
									<i class="fa fa-arrow-circle-o-down" /> Herunterladen
								</a>
							</li>

							<li>
								<ApiButton resourceId={resource.id} />
							</li>
						{/if}
						{#if hasApi}
							<li>
								<a
									class="btn btn-primary resource-url-analytics resource-type-api"
									href={resource.url}
								>
									<i class="fa fa-key" /> API-Schnittstelle
								</a>
							</li>
						{/if}
					</ul>
				</div>

				<p class="muted ellipsis">
					URL: <a href={resource.url} title={resource.url}>{resource.url}</a>
				</p>
				{#if type.description}
					<div class="prose notes" property="rdfs:label">
						<p>{type.description}</p>

						<p>
							{@html marked(type.link)}
						</p>
					</div>
				{/if}
			</div>

			{#if hasDataset}
				<ul class="nav nav-tabs nav-tabs-plain">
					<li class="active" data-id="cea9d84a-6567-45d3-9f6d-224bf54c565c">
						<a
							href="/dataset/sid_dav_verkehrszaehlung_miv_od2031/resource/44607195-a2ad-4f9b-b6f1-d26c003d85a2?view_id=cea9d84a-6567-45d3-9f6d-224bf54c565c"
							data-id="cea9d84a-6567-45d3-9f6d-224bf54c565c"
						>
							<i class="fa icon fa-table" />
							Data Explorer
						</a>
					</li>
				</ul>

				<div class="module-content">
					<div class="resource-view">
						<div
							id="view-cea9d84a-6567-45d3-9f6d-224bf54c565c"
							class="resource-view"
							data-id="cea9d84a-6567-45d3-9f6d-224bf54c565c"
							data-title="Data Explorer"
							data-description=""
						>
							<a
								class="btn pull-right"
								href="#embed-cea9d84a-6567-45d3-9f6d-224bf54c565c"
								data-module="resource-view-embed"
								data-module-id="cea9d84a-6567-45d3-9f6d-224bf54c565c"
								data-module-url="https://data.stadt-zuerich.ch/dataset/sid_dav_verkehrszaehlung_miv_od2031/resource/44607195-a2ad-4f9b-b6f1-d26c003d85a2/view/cea9d84a-6567-45d3-9f6d-224bf54c565c"
							>
								<i class="fa fa-code" />
								Einbettung
							</a>
							<p class="desc" />
							<div class="m-top ckanext-datapreview">
								<div
									class="resource-view-filters"
									data-module="resource-view-filters"
									data-module-resource-id="44607195-a2ad-4f9b-b6f1-d26c003d85a2"
									data-module-fields="[&quot;Achse&quot;, &quot;AnzDetektoren&quot;, &quot;AnzFahrzeuge&quot;, &quot;AnzFahrzeugeStatus&quot;, &quot;D1ID&quot;, &quot;D2ID&quot;, &quot;D3ID&quot;, &quot;D4ID&quot;, &quot;EKoord&quot;, &quot;HNr&quot;, &quot;Hoehe&quot;, &quot;Kname&quot;, &quot;Knummer&quot;, &quot;LieferDat&quot;, &quot;MSID&quot;, &quot;MSName&quot;, &quot;MessungDatZeit&quot;, &quot;NKoord&quot;, &quot;Richtung&quot;, &quot;ZSID&quot;, &quot;ZSName&quot;, &quot;_id&quot;]"
								>
									<div />
									<a href="#">Filter hinzufügen</a>
								</div>

								<div class="data-viewer-error js-hide">
									<p class="text-error">
										<i class="fa fa-info-circle" />
										Diese Ressourcendarstellung/-view kann momentan nicht angezeigt werden.
										<a href="#" data-toggle="collapse" data-target="#data-view-error">
											Klick hier für mehr Informationen.
										</a>
									</p>
									<p id="data-view-error" class="collapse" />
									<p>
										<a
											href="https://data.stadt-zuerich.ch/dataset/sid_dav_verkehrszaehlung_miv_od2031/download/sid_dav_verkehrszaehlung_miv_OD2031_2020.csv"
											class="btn btn-large resource-url-analytics"
											target="_blank"
										>
											<i class="fa fa-lg fa-arrow-circle-o-down" />
											Ressource herunterladen
										</a>
									</p>
								</div>

								<iframe
									src="/dataset/{dataset.name}/resource/{resource.id}/view/cea9d84a-6567-45d3-9f6d-224bf54c565c"
									frameborder="0"
									width="100%"
									data-module="data-viewer"
									style="height: 672px;"
								>
									<p>Ihr Browser unterstützt keine IFrames.</p>
								</iframe>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<div>
				<ResourceInfo {resource} {datastore} />
			</div>

			<aside slot="left">
				<ResourceList {dataset} {resource} />
			</aside>
		</TwoColumn>
	</Page>
</Page>
