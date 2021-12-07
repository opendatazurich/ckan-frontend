<script context="module" lang="ts">
	import { loadShowcases, pageSize } from '../../lib/api';
	import marked from 'marked';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async (args) => {
		return loadShowcases(args);
	};
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

	export let datasets = [];
	export let search_facets = {};
	export let count = 0;
	export let q = 0;
	const getUrl = (path) => `https://data.stadt-zuerich.ch/uploads/showcase/${path}`;
	function normalizeUrl(url: string) {
		url = url || '';
		return url.startsWith('http') ? url : getUrl(url);
	}
</script>

<Page>
	<Toolbar links={[['/showcase', 'Showcases']]} />
	<TwoColumn>
		<div class="mainparsys parsys">
			<div class="mod_search" data-init="search">
				<SearchForm />
				<SearchResult {count} {q} />
				<DatasetList {datasets} />
				<!--
				<div class="mod_newsteaser var_event_search_result">
					{#each datasets as showcase (showcase.id)}
						<a href="/showcase/{showcase.name}" class="teaser">
							{#if showcase.image_url}
								<img
									class="teaser__image loaded"
									alt={showcase.title}
									src={normalizeUrl(showcase.image_url)}
								/>
							{:else}
								<img class="teaser__image loaded" alt={showcase.title} src="/no-image.svg" />
							{/if}
							<div class="content">
								<h3>{showcase.title}</h3>

								<p class="content__lead">
									{@html marked(showcase.notes)}
								</p>
							</div>
						</a>
					{/each}
				</div>
-->
				<Pagination {count} {pageSize} />
			</div>
		</div>
		<Filters slot="left" {search_facets} />
	</TwoColumn>
</Page>
