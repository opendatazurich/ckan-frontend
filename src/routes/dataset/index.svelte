<script context="module" lang="ts">
	import { loadDatasets, pageSize } from '../../lib/api';
	export { loadDatasets as load };
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
