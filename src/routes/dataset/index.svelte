<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { get, pageSize, facetIds, facets } from '$lib/api';

	export const load: Load = async ({ page }) => {
		const pageIndex = +(page.query.get('page') || '1');
		//const sort = page.query.get('sort') || '';
		const q = page.query.get('q') || '';
		const start = (pageIndex - 1) * pageSize;

		const newQuery = new URLSearchParams();
		newQuery.set('q', q);
		newQuery.set('sort', page.query.get('sort') || '');
		newQuery.set('rows', `${pageSize}`);
		newQuery.set('start', `${start}`);
		newQuery.set('facet.field', `${JSON.stringify(facetIds)}`);
		newQuery.set('facet', 'true');

		const facetQuery = facets
			.map((facet) => ({ ...facet, items: page.query.getAll(facet.id) }))
			.filter((facet) => facet.items.length)
			.map((facet) => `${facet.id}:(${facet.items.join(' AND ')})`)
			.join(' AND ');

		newQuery.set('fq', facetQuery);

		const { count, results: datasets, search_facets } = await get(`package_search?${newQuery}`);
		return {
			props: {
				datasets,
				search_facets,
				count,
				page: pageIndex,
				q
			}
		};
	};
</script>

<script lang="ts">
	import DatasetList from '$lib/DatasetList.svelte';
	import FilterList from '$lib/FilterList.svelte';
	import Filters from '$lib/Filters.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import AutoSuggestionField from '$lib/AutoSuggestionField.svelte';
	import SortControl from '$lib/SortControl.svelte';

	export let datasets = [];
	export let search_facets = {};
	export let count = 0;
	export let q = '';

	const options = [
		{ id: 'score desc, date_last_modified desc', title: 'Relevanz' },
		{ id: 'title_string asc', title: 'Name aufsteigend' },
		{ id: 'title_string desc', title: 'Name absteigend' },
		{ id: 'date_last_modified desc', title: 'Zuletzt geändert' }
	];
</script>

<div role="main">
	<div id="content" class="container">
		<div class="flash-messages" />

		<div class="toolbar">
			<ol class="breadcrumb">
				<li class="home"><a href="/"><i class="fa fa-home" /><span> Start</span></a></li>

				<li class="active"><a href="/dataset">Datensätze</a></li>
			</ol>
		</div>

		<div class="row wrapper">
			<div class="primary span9">
				<section class="module">
					<div class="module-content">
						<form
							id="dataset-search-form"
							class="search-form"
							method="get"
							data-module="select-switch"
						>
							<AutoSuggestionField placeholder="Datensätze suchen..." />
							<SortControl {options} />

							<h2>
								{count === 0 ? 'Keine' : count} Datensätze {q != '' ? `gefunden für “${q}”` : ''}
							</h2>

							<FilterList {search_facets} />
							<a class="show-filters btn">Ergebnisse filtern</a>
						</form>

						<DatasetList {datasets} />
					</div>

					<Pagination {count} {pageSize} />
				</section>

				<section class="module">
					<div class="module-content">
						<small>
							Sie können dieses Register auch über die <a href="/showcases?ver=%2F3">API</a> (siehe
							<a href="http://docs.ckan.org/en/2.7/api/">API-Dokumentation</a>) abrufen.
						</small>
					</div>
				</section>
			</div>

			<aside class="secondary span3">
				<Filters {search_facets} />
			</aside>
		</div>
	</div>
</div>
