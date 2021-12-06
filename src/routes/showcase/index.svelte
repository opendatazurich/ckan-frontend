<script context="module" lang="ts">
	import { loadShowcases, pageSize } from '../../lib/api';
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

								<div class="mod_eventinfo var_eventteaser var_eventteaser--search_result_list">
									<div class="mod_eventinfo__column-wrapper">
										<div class="mod_eventinfo__column mod_eventinfo__column--time-location">
											<time class="mod_eventinfo__full-date" datetime="2018-06-14T17:00:00">
												<span class="mod_eventinfo__full-date--day">Donnerstag, </span>
												<span class="mod_eventinfo__full-date--date">14. Juni 2018, </span>
											</time>
											<time class="mod_eventinfo__time">17.00–20.00 Uhr</time>
											<span class="mod_eventinfo__info">(weitere Daten vorhanden)</span>
											<span class="mod_eventinfo__location">
												<span class="mod_eventinfo__location-name"
													>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
													eirmod tempor invidunt ut lab
												</span>
												<span class="mod_eventinfo__location-address">Neumarkt 4, 8001 Zürich</span>
											</span>
										</div>
									</div>
								</div>

								<p class="content__lead">
									Zürcher Klöster und Kapellen: von den Reformatoren abgeschafft – Eine Ausstellung
									vom 8. Juni bis 23. September 2018 im Haus zum Rech.
								</p>
							</div>
						</a>
					{/each}
				</div>

				<Pagination {count} {pageSize} />
			</div>
		</div>
		<Filters slot="left" {search_facets} />
	</TwoColumn>
</Page>
