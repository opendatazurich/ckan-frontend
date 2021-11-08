<script lang="ts">
	import { page } from '$app/stores';
	import { makeFilterUrl } from '$lib/api';
	export let filters = [] as { id: string; items: any[]; title: string }[];
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
