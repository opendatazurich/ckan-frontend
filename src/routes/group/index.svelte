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
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';

	$: q = $page.query.get('q');

	export let groups: Group[] = [];

	function submit(e) {
		const query = new URLSearchParams(new FormData(e.target) as any);
		goto(`?${query}`, { keepfocus: true });
	}
</script>

<Page>
	<Toolbar links={[['/group', 'Kategorien']]} />
	<div class="mod_search">
		<form on:submit|preventDefault={submit} method="get">
			<h2>Suchen</h2>
			<div class="layout_columns var_two_columns">
				<div class="layout_column">
					<div class="mod_formautocomplete">
						<label class="top_label" for="q">Suchen nach:</label>
						<div class="mod_formtextinput" id="q">
							<input
								type="text"
								name="q"
								value={q}
								aria-describedby="search_description"
								class="ui-autocomplete-input"
								autocomplete="off"
							/>
						</div>
					</div>
				</div>
				<div class="layout_column">
					<SortControl />
				</div>
				<div class="layout_column" />
				<div class="layout_column">
					<input type="submit" class="mod_button var_large" value="Suchen" />
				</div>
			</div>
		</form>

		{#if groups.length}
			<GroupList all={false} {groups} />
		{:else}
			<p class="extra">Bitte versuch es mit einer anderen Suche.</p>
		{/if}
	</div>
</Page>
