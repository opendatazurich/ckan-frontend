<script context="module" lang="ts">
	export { loadGroup as load } from '$lib/api';
</script>

<script lang="ts">
	import Pagination from '$lib/Pagination.svelte';
	import TwoColumn from '$lib/TwoColumn.svelte';
	import Filters from '$lib/Filters.svelte';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import SearchResult from '$lib/SearchResult.svelte';
	import SearchForm from '$lib/SearchForm.svelte';
	import DatasetList from '$lib/DatasetList.svelte';
	import FilterList from '$lib/FilterList.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import Group from '$lib/Group.svelte';
	import { pageSize } from '$lib/api';

	export let datasets = [];
	export let group = {} as any;
	export let search_facets = {};
	export let count = 0;
	export let q = 0;
	export let filters = [];
</script>

<Page>
	<Toolbar
		links={[
			['/group', 'Kategorien'],
			[`/group/${group.id}`, group.display_name]
		]}
	/>
	<TwoColumn>
		<div class="mainparsys parsys">
			<div class="mod_search" data-init="search">
				<SearchForm />
				<FilterList {filters} />
				<SearchResult {count} {q} />
				<DatasetList pathPrefix="/dataset" cols {datasets} />
				<Pagination {count} {pageSize} />
			</div>
		</div>
		<div slot="left">
			<Accordion isStatic nopadding content={false} title="Kategorie">
				<Group layout_column={false} {group} />
			</Accordion>
			<Filters {search_facets} />
		</div>
	</TwoColumn>
</Page>
