<script lang="ts">
	import {
		Pagination,
		TwoColumn,
		Filters,
		Page,
		Toolbar,
		SearchResult,
		SearchForm,
		DatasetList,
		FilterList
	} from '$lib/components';
	import { pageSize } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ datasets, search_facets, count, q, filters } = data);
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
