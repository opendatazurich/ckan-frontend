<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { loadDataset, get } from '$lib/api';

	export const load: Load = async (args) => {
		const resourceId = args.page.params.resourceId;
		const { props } = (await loadDataset(args.page.params.datasetId)) as any;

		const resource = props.dataset.resources.find((resource) => resource.id == resourceId);
		if (!resource) {
			return {
				status: 404,
				error: `Resource "${resourceId}" wurde nicht gefunden.`
			};
		}

		let datastore = null;
		if (resource.datastore_active) {
			datastore = await get(
				`datastore_search?resource_id=${resourceId}&limit=0&include_total=False`
			);
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
	import Button from '$lib/Button.svelte';

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

	<TwoColumn>
		<PageTitle>{resource.name}</PageTitle>
		<div class="module-content">
			<div class="actions">
				{#if hasDataset}
					<Button secondary icon="download" href={resource.url}>Herunterladen</Button>
					<ApiButton resourceId={resource.id} />
				{/if}
				{#if hasApi}
					<Button icon="external_links" href={resource.url} secondary>API-Schnittstelle</Button>
				{/if}
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
			<h2>Data Explorer</h2>

			<iframe
				title="Dataset: {dataset.name}"
				src="/dataset/{dataset.name}/resource/{resource.id}/view/cea9d84a-6567-45d3-9f6d-224bf54c565c"
				frameborder="0"
				width="100%"
				style="height: 672px;"
			>
				<p>Ihr Browser unterstützt keine IFrames.</p>
			</iframe>
		{/if}

		<ResourceInfo {resource} {datastore} />

		<ResourceList slot="left" {dataset} {resource} />
	</TwoColumn>
</Page>
