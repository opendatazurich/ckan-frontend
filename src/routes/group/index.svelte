<script context="module" lang="ts">
	import { url } from '$lib/api';

	export async function load({ fetch, page }) {
		const res = await fetch(url(`group_list?all_fields=true&${page.query}`));
		const data = await res.json();
		return {
			props: {
				groups: data.result
			}
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import GroupList from '$lib/GroupList.svelte';
	import type { Group } from '$lib/GroupList.svelte';
	import SearchField from '$lib/SearchField.svelte';
	import SortControl from '$lib/SortControl.svelte';
	import { goto } from '$app/navigation';

	$: q = $page.query.get('q');

	export let groups: Group[] = [];

	function submit(e) {
		const query = new URLSearchParams(new FormData(e.target) as any);
		goto(`?${query}`, { keepfocus: true });
	}
</script>

<div role="main">
	<div id="content" class="container">
		<div class="flash-messages" />

		<div class="toolbar">
			<ol class="breadcrumb">
				<li class="home"><a href="/"><i class="fa fa-home" /><span> Start</span></a></li>
				<li class="active"><a class=" active" href="/group">Kategorien</a></li>
			</ol>
		</div>

		<div class="row wrapper no-nav">
			<div class="primary span12 category-box">
				<article class="module">
					<div class="module-content">
						<h1 class="hide-heading">Kategorien</h1>

						<form
							on:submit|preventDefault={submit}
							id="group-search-form"
							class="search-form"
							class:no-bottom-border={groups.length}
							method="get"
						>
							<SearchField placeholder="Gruppe suchen..." />

							<SortControl />
							<h2>
								{groups.length !== 0 ? groups.length : 'Keine'}
								{groups.length !== 1 ? 'Kategorien' : 'Kategorie'} gefunden{q ? ` für "${q}"` : ''}
							</h2>
						</form>

						{#if groups.length}
							<GroupList {groups} />
						{:else}
							<p class="extra">Bitte versuch es mit einer anderen Suche.</p>
						{/if}
					</div>
				</article>
			</div>
		</div>
	</div>
</div>
