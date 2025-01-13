<script lang="ts">
	import type { PageData } from './$types';
	import { GroupList, Page, Toolbar, SearchForm } from '$lib/components';

	export let data: PageData;
	$: groups = data.groups;

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
