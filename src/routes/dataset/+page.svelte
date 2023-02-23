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
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ datasets, search_facets, count, q, filters } = data);
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
