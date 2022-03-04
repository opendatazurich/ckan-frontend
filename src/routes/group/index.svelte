<script context="module" lang="ts">
	export { loadGroups as load } from '$lib/api';
</script>

<script lang="ts">
	import GroupList from '$lib/GroupList.svelte';
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';
	import SearchForm from '$lib/SearchForm.svelte';
	import type { GroupType } from '$lib/types';

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
