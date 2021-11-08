<script lang="ts">
	import { page } from '$app/stores';
	import { facets, makeFilterUrl } from '$lib/api';
	export let search_facets = {};
	$: filters = facets
		.map((facet) => ({ ...facet, items: $page.query.getAll(facet.id) }))
		.map((facet) => {
			const facetItems = search_facets[facet.id]?.items;
			const items = facet.items.map((item) => facetItems.find((i) => i.name === item));
			return { ...facet, items };
		})
		.filter((facet) => facet.items.length);
	$: query = new URLSearchParams($page.query);
	$: path = $page.path;
	$: url = makeFilterUrl(path, query);
</script>

<p class="filter-list">
	{#each filters as filter}
		<span class="facet">{filter.title}:</span>
		{#each filter?.items as item}
			<span class="filtered pill"
				>{item.display_name}
				<a href={url(filter.id, item.name)} class="remove" title="Entfernen"
					><i class="fa fa-times" /></a
				>
			</span>
		{/each}
	{/each}
</p>
