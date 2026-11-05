<script lang="ts">
	import Filter from './Filter.svelte';
	import { defaultFacets } from '$lib/config';
	import Accordion from './Accordion.svelte';
	export let search_facets = {} as any;

	$: unorderedFilters = Object.keys(search_facets).map((key) => {
		const raw = search_facets[key]?.items ?? [];
		return {
			key,
			items: raw.filter((item: { name?: string } | null) => item != null && item.name != null)
		};
	});
	$: filters = defaultFacets
		.map((facet) => {
			const filter = unorderedFilters.find((filter) => filter.key === facet.id)!;
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
