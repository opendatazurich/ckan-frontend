<script lang="ts">
	import type { PageData, PageServerData } from './$types';
	import {
		DatasetHeader,
		DatasetLicense,
		DatasetNotes,
		DatasetResources,
		DatasetTags,
		DatasetInfo,
		Page,
		Toolbar,
		PageTitle,
		GroupList,
		DatasetList,
		DatasetSchemaOrg
	} from '$lib/components';
	import { truncate } from '$lib/string';

	export let data: PageData & PageServerData;
	$: ({ dataset, showcases, jsonld } = data);
</script>

<Page>
	<Toolbar
		links={[
			['/dataset', 'Datensätze'],
			[`/dataset/${dataset.name}`, truncate(dataset.title, 28, ' ...')]
		]}
	/>
	<PageTitle>{dataset.title}</PageTitle>
	<DatasetHeader hasShowcases={showcases.length > 0} hasGroups={dataset.groups.length > 0} />
	<DatasetNotes notes={dataset.html_notes} />
	<DatasetTags {dataset} />
	<DatasetLicense {dataset} />
	<h2 id="dataset">Daten & Ressourcen</h2>
	<DatasetResources {dataset} />
	<DatasetInfo {dataset} />
	{#if dataset.groups.length}
		<h2 id="category">Kategorien</h2>
		<GroupList all={false} groups={dataset.groups} />
	{/if}
	{#if showcases.length}
		<h2 id="showcase">Showcases</h2>
		<DatasetList pathPrefix="/showcase" cols datasets={showcases} />
	{/if}
</Page>

<DatasetSchemaOrg {jsonld} />
