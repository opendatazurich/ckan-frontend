<script context="module" lang="ts">
	export { loadDatasets as load } from '$lib/api';
</script>

<script lang="ts">
	import DatasetList from '$lib/DatasetList.svelte';
	import Filters from '$lib/Filters.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import TwoColumn from '$lib/TwoColumn.svelte';
	import SearchForm from '$lib/SearchForm.svelte';
	import SearchResult from '$lib/SearchResult.svelte';
	import FilterList from '$lib/FilterList.svelte';
	import { pageSize } from '$lib/api';

	export let datasets = [];
	export let search_facets = {};
	export let count = 0;
	export let q = 0;
	export let filters = [];
</script>

<Page>
	<Toolbar links={[['/dataset', 'Datensätze']]} />
	<TwoColumn>
		<div class="mod_search">
			<SearchForm autocomplete />
			<FilterList {filters} />
			<SearchResult {count} {q} />
			<DatasetList {datasets} />
			<Pagination {count} {pageSize} />
		</div>

		<Filters slot="left" {search_facets} />
	</TwoColumn>
</Page>
