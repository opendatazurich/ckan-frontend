<script lang="ts">
	import type { PageData } from './$types';
	import {
		Pagination,
		TwoColumn,
		Filters,
		Page,
		Toolbar,
		SearchResult,
		SearchForm,
		DatasetList,
		FilterList,
		Accordion,
		Group
	} from '$lib/components';
	import { pageSize } from '$lib/config';

	export let data: PageData;
	$: ({ datasets, group, search_facets, count, q, filters } = data);
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
