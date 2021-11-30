<script context="module" lang="ts">
	import { loadDatasets, pageSize } from '../../lib/api';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async (args) => {
		return loadDatasets(args);
	};
</script>

<script lang="ts">
	import DatasetList from '$lib/DatasetList.svelte';
	import Filters from '$lib/Filters.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import TwoColumn from '$lib/TwoColumn.svelte';
	import SearchForm from '$lib/SearchForm.svelte';

	export let datasets = [];
	export let search_facets = {};
	export let count = 0;
	export let q = 0;
</script>

<Page>
	<Toolbar links={[['/dataset', 'Datensätze']]} />
	<TwoColumn>
		<div class="mod_search">
			<SearchForm />

			<h2 class="total">
				Suchergebnis: <span class="total">{count} Treffer {q ? `für "${q}"` : ''}</span>
			</h2>
			<DatasetList {datasets} />
			<Pagination {count} {pageSize} />
		</div>

		<Filters slot="left" {search_facets} />
	</TwoColumn>
</Page>
