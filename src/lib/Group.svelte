<script lang="ts">
	import type { GroupType } from './types';

	export let group: GroupType;
	export let layout_column = true;
</script>

<div class:layout_column class="mod_teaserlist__item">
	<div data-init="newsteaser" class="mod_newsteaser var_fixed_height">
		<a href="/group/{group.name}" class="teaser"
			><img alt={group.name} src={group.image_url} class="teaser__image" />
			<div data-newsteaser-content="" class="content">
				<h3 data-newsteaser-title="" style="overflow: hidden; height: auto;">
					{group.display_name}
				</h3>
				{#if group.package_count}
					<p>
						{group.package_count} Datensätze
					</p>
				{/if}

				<div class="icon-arrow"><span class="visuallyhidden">Zur Kategorie</span></div>
			</div></a
		>
	</div>
</div>
