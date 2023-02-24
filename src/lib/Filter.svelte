<script lang="ts">
	import { page } from '$app/stores';
	import { truncate } from '$lib/string';
	import { makeFilterUrl } from '$lib/api';

	export let title = 'Filter';
	export let key: string;
	export let items = [] as { name: string; count: number; display_name: string }[];
	const limitKey = `_${key}_limit`;
	$: query = new URLSearchParams($page.url.searchParams);
	$: query.delete('page');
	$: path = $page.url.pathname;
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

<div class="mod_linklist">
	{#if filteredItems.length}
		<ul class="linklist">
			{#each filteredItems as item}
				<li class="linklist_item">
					<div class="mod_linklistitem">
						<a data-sveltekit-noscroll href={url(key, item.name)} class="linklistitem">
							<span>{truncate(item.display_name, 19, '...', false)} ({item.count})</span>
							<span class="icon" class:icon_ico_cross={isActive(item.name)} />
						</a>
					</div>
				</li>
			{/each}
			<li class="linklist_item">
				<div class="mod_linklistitem">
					{#if limit !== -1}
						<a data-sveltekit-noscroll href={moreItemsUrl()} class="linklistitem"
							>Mehr {title} anzeigen</a
						>
					{:else}
						<a data-sveltekit-noscroll href={lessItemsUrl()} class="linklistitem"
							>Nur häufig nachgefragte {title} anzeigen</a
						>
					{/if}
				</div>
			</li>
		</ul>
	{:else}
		<p>Für diese Suche wurden keine {title} gefunden</p>
	{/if}
</div>
