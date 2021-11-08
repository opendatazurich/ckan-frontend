<script lang="ts">
	import Filter from './Filter.svelte';
	import { defaultFacets } from '$lib/api';
	export let search_facets = {} as any;

	$: unorderedFilters = Object.keys(search_facets).map((key) => {
		return {
			key,
			items: search_facets[key]?.items
		};
	});
	$: filters = defaultFacets
		.map((facet) => {
			const filter = unorderedFilters.find((filter) => filter.key === facet.id);
			return {
				...filter,
				title: facet.title
			};
		})
		.filter((facet) => facet.key);
</script>

<div class="filters">
	<div>
		{#each filters as filter}
			<svelte:component this={Filter} {...filter} />
		{/each}
	</div>
	<a class="close no-text hide-filters"
		><i class="fa fa-times-circle" /><span class="text">close</span></a
	>
</div>
