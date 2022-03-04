<script lang="ts">
	import Group from './Group.svelte';
	import type { GroupType } from '$lib/types';

	export let groups: GroupType[] = [];
	export let all = true;
</script>

<div data-teaserlist="" class="mod_subpageslist mod_teaserlist">
	<div class="mod_subpageslist__wrapper fullwidth">
		<div class="layout_columns var_three_columns">
			{#each groups as group}
				<Group {group} />
			{/each}
		</div>
		{#if all}
			<div class="mod_subpageslist__actions">
				<div class="mod_cta__item">
					<a href="/group" title="Allen Kategorien"
						><span class="label mod_cta__label">Alle Kategorien</span></a
					>
				</div>
			</div>
		{/if}
	</div>
</div>
