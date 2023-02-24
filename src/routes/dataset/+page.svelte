<script lang="ts">
	import type { PageData } from './$types';
	import {
		DatasetList,
		Filters,
		Pagination,
		Page,
		Toolbar,
		TwoColumn,
		SearchForm,
		SearchResult,
		FilterList
	} from '$lib/components';
	import { pageSize } from '$lib/config';

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
