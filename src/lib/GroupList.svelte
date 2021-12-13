<script context="module" lang="ts">
	export type Group = {
		display_name: string;
		package_count: number;
		name: string;
		image_url: string;
	};
</script>

<script lang="ts">
	export let groups: Group[] = [];
	export let all = true;
</script>

<div data-teaserlist="" class="mod_subpageslist mod_teaserlist">
	<div class="mod_subpageslist__wrapper fullwidth">
		<div class="layout_columns var_three_columns">
			{#each groups as group}
				<div class="layout_column mod_teaserlist__item">
					<div data-init="newsteaser" class="mod_newsteaser var_fixed_height">
						<a href="group/{group.name}" class="teaser"
							><img alt={group.name} src={group.image_url} class="teaser__image" />
							<div data-newsteaser-content="" class="content">
								<h3 data-newsteaser-title="" style="overflow: hidden; height: auto;">
									{group.display_name}
								</h3>
								<p>
									{group.package_count} Datensätze
								</p>

								<div class="icon-arrow"><span class="visuallyhidden">Zur Kategorie</span></div>
							</div></a
						>
					</div>
				</div>
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
