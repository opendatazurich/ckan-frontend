<script context="module" lang="ts">
	export { loadShowcases as load } from '$lib/api';
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
	import { pageSize } from '$lib/api';

	export let datasets = [];
	export let search_facets = {};
	export let count = 0;
	export let q = 0;
	export let filters = [];
</script>

<Page>
	<Toolbar links={[['/showcase', 'Showcases']]} />
	<TwoColumn>
		<div class="mainparsys parsys">
			<div class="mod_search" data-init="search">
				<SearchForm autocomplete scope="showcase" placeholder="Showcases suchen..." />
				<FilterList {filters} />
				<SearchResult {count} {q} />
				<DatasetList cols {datasets} />
				<Pagination {count} {pageSize} />
			</div>
		</div>
		<Filters slot="left" {search_facets} />
	</TwoColumn>
</Page>
