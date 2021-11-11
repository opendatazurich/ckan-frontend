<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { loadGroupDatasets, pageSize, loadGroup } from '$lib/api';

	export const load: Load = async (args) => {
		const groupId = args.page.params.groupId;
		const data = (await loadGroupDatasets(groupId)(args)) as any;
		const groupData = (await loadGroup(args)) as any;
		return {
			props: {
				...data.props,
				...groupData.props
			}
		};
	};
</script>

<script lang="ts">
	import DatasetList from '$lib/DatasetList.svelte';
	import FilterList from '$lib/FilterList.svelte';
	import Filters from '$lib/Filters.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import SearchField from '$lib/SearchField.svelte';
	import SortControl from '$lib/SortControl.svelte';
	import { goto } from '$app/navigation';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import { tick } from 'svelte';
	import GroupHeader from '$lib/GroupHeader.svelte';

	export let datasets = [];
	export let search_facets = {};
	export let count = 0;
	export let q = '';
	export let filters = [];
	export let group = {} as any;

	const options = [
		{ id: 'score desc, date_last_modified desc', title: 'Relevanz' },
		{ id: 'title_string asc', title: 'Name aufsteigend' },
		{ id: 'title_string desc', title: 'Name absteigend' },
		{ id: 'date_last_modified desc', title: 'Zuletzt geändert' }
	];

	function submit(e) {
		const query = new URLSearchParams(new FormData(e.target) as any);
		goto(`?${query}`, { keepfocus: true });
	}
</script>

<Page>
	<Toolbar
		links={[
			['/group', 'Kategorien'],
			[`/group/${group.name}`, group.title]
		]}
	/>

	<div class="row wrapper">
		<div class="primary span9">
			<section class="module">
				<GroupHeader />
				<div class="module-content">
					<form
						on:submit|preventDefault={submit}
						id="dataset-search-form"
						class="search-form"
						method="get"
						data-module="select-switch"
					>
						<SearchField placeholder="Datensätze suchen..." />
						<SortControl {options} />

						<h2>
							{count === 0 ? 'Keine' : count} Datensätze {q != '' ? `gefunden für “${q}”` : ''}
						</h2>

						<FilterList {filters} />
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
			<div class="module context-info">
				<section class="module-content">
					<div class="image">
						<a href="">
							<img src={group.image_display_url} width="190" height="118" alt="arbeit-und-erwerb" />
						</a>
					</div>

					<h1 class="heading">{group.title}</h1>

					<div class="nums">
						<dl>
							<dt>Datensätze</dt>
							<dd><span>{count}</span></dd>
						</dl>
					</div>
				</section>
			</div>
			<Filters {search_facets} />
		</aside>
	</div>
</Page>
