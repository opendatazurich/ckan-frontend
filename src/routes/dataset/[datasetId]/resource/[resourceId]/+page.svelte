<script lang="ts">
	import type { PageData } from './$types';
	import {
		ResourceInfo,
		ResourceList,
		ApiButton,
		Page,
		Toolbar,
		PageTitle,
		TwoColumn,
		Button
	} from '$lib/components';

	import { marked } from 'marked';
	import { truncate } from '$lib/string';
	import { getType } from '$lib/dataTypes';
	import { ckanUrl } from '$lib/config';

	export let data: PageData;
	$: ({ dataset, resource, datastore, viewId } = data);
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
				URL: <a rel="external" href={resource.url} title={resource.url}>{resource.url}</a>
			</p>

			{#if resource.markdown_snippet}
				<div class="snippet">
					{@html marked.parse(resource.markdown_snippet)}
				</div>
			{/if}

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
				src="{ckanUrl}/dataset/{dataset.name}/resource/{resource.id}/view/{viewId}"
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
