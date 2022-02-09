<script lang="ts">
	import Filter from './Filter.svelte';
	import { defaultFacets } from '$lib/api';
	import Accordion from './Accordion.svelte';
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

{#each filters as filter}
	<Accordion isStatic title={filter.title}>
		<Filter {...filter} />
	</Accordion>
{/each}
