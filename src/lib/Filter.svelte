<script lang="ts">
	import { page } from '$app/stores';
	import { truncate } from '$lib/string';
	import { makeFilterUrl } from '$lib/api';

	export let title = 'Filter';
	export let key;
	export let items = [];
	const limitKey = `_${key}_limit`;
	$: query = new URLSearchParams($page.query);
	$: query.delete('page');
	$: path = $page.path;
	$: url = makeFilterUrl(path, query);
	$: limit = query.has(limitKey) ? -1 : 10;
	$: filteredItems = items
		.sort((a, b) => a.name.localeCompare(b.name))
		.sort((a, b) => b.count - a.count)
		.slice(0, limit);
	$: moreItemsUrl = () => {
		const newQuery = new URLSearchParams(query);
		newQuery.set(limitKey, '0');
		return `${path}?${newQuery}`;
	};
	$: lessItemsUrl = () => {
		const newQuery = new URLSearchParams(query);
		newQuery.delete(limitKey);
		return `${path}?${newQuery}`;
	};
	$: isActive = (name: string) => {
		let groups = query.getAll(key);
		return groups.includes(name);
	};
</script>

<section class="module module-narrow module-shallow">
	<h2 class="module-heading">
		<i class="fa fa-filter" />
		{title}
	</h2>
	{#if filteredItems.length}
		<nav>
			<ul class="unstyled nav nav-simple nav-facet">
				{#each filteredItems as item}
					<li class="nav-item" class:active={isActive(item.name)}>
						<a href={url(key, item.name)}>
							<span>{truncate(item.display_name, 19, '...', false)} ({item.count})</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<p class="module-footer">
			{#if limit !== -1}
				<a href={moreItemsUrl()} class="read-more">Mehr {title} anzeigen</a>
			{:else}
				<a href={lessItemsUrl()} class="read-more">Nur häufig nachgefragte {title} anzeigen</a>
			{/if}
		</p>
	{:else}
		<p class="module-content empty">Für diese Suche wurden keine {title} gefunden</p>
	{/if}
</section>
