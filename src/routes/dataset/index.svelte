<script context="module" lang="ts">
	import { loadDatasets, pageSize } from '../../lib/api';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async (args) => {
		return loadDatasets(args);
	};
</script>

<script lang="ts">
	import DatasetList from '$lib/DatasetList.svelte';
	import FilterList from '$lib/FilterList.svelte';
	import Filters from '$lib/Filters.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import AutoSuggestionField from '$lib/AutoSuggestionField.svelte';
	import SortControl from '$lib/SortControl.svelte';
	import { goto } from '$app/navigation';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import FilterShowButton from '$lib/FilterShowButton.svelte';

	export let datasets = [];
	export let search_facets = {};
	export let count = 0;
	export let q = '';
	export let filters = [];

	const options = [
		{ id: 'score desc, date_last_modified desc', title: 'Relevanz' },
		{ id: 'title_string asc', title: 'Name aufsteigend' },
		{ id: 'title_string desc', title: 'Name absteigend' },
		{ id: 'date_last_modified desc', title: 'Zuletzt geändert' }
	];

	function submit(e) {
		const query = new URLSearchParams(new FormData(e.target) as any);
		goto(`?${query}`, { keepfocus: true, noscroll: true });
	}
</script>

<Page>
	<Toolbar links={[['/dataset', 'Datensätze']]} />
	<div class="layout_columns var_aside_columns">
		<div class="layout_column var_column_right">
			<div class="mod_search">
				<form on:submit|preventDefault={submit} method="get">
					<h2>Suchen</h2>
					<div class="layout_columns var_two_columns">
						<div class="layout_column">
							<div class="mod_formautocomplete">
								<label class="top_label" for="q">Suche nach Stichworten:</label>
								<div class="mod_formtextinput" id="q">
									<input
										type="text"
										name="q"
										value={q}
										aria-describedby="search_description"
										class="ui-autocomplete-input"
										autocomplete="off"
									/>
								</div>
							</div>
						</div>
						<div class="layout_column">
							<SortControl {options} />
						</div>
						<div class="layout_column" />
						<div class="layout_column">
							<input type="submit" class="mod_button var_large" value="Suchen" />
						</div>
					</div>
				</form>

				<h2 class="total">
					Suchergebnis: <span class="total">{count} Treffer {q ? `für "${q}"` : ''}</span>
				</h2>

				<DatasetList {datasets} />
			</div>
			<div class="row wrapper">
				<div class="primary span9">
					<section class="module">
						<div class="module-content">
							<form
								on:submit|preventDefault={submit}
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

								<FilterList {filters} />
								<FilterShowButton />
							</form>
						</div>

						<Pagination {count} {pageSize} />
					</section>
				</div>
			</div>
		</div>
		<div class="layout_column var_column_left">
			<Filters {search_facets} />
		</div>
	</div>
</Page>
