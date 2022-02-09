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
	import GroupList from '$lib/GroupList.svelte';
	import type { GroupType } from '$lib/Group.svelte';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import SearchForm from '$lib/SearchForm.svelte';

	export let groups: GroupType[] = [];

	let options = [
		{ id: 'title asc', title: 'Name aufsteigend' },
		{ id: 'title desc', title: 'Name absteigend' }
	];
</script>

<Page>
	<Toolbar links={[['/group', 'Kategorien']]} />
	<div class="mod_search">
		<SearchForm {options} />

		{#if groups.length}
			<GroupList all={false} {groups} />
		{:else}
			<p class="extra">Bitte versuch es mit einer anderen Suche.</p>
		{/if}
	</div>
</Page>
