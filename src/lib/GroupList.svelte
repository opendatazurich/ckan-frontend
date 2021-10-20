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
</script>

<ul class="media-grid media-grid-zh">
	{#each groups as group}
		<li class="media-item media-item-zh">
			<img src={group.image_url} alt={group.name} class="media-image" />

			<h3 class="media-heading">{group.display_name}</h3>

			<strong class="count">{group.package_count} Datensätze</strong>

			<a href="/group/{group.name}" title="{group.display_name} ansehen" class="media-view">
				<span>{group.display_name} ansehen</span>
			</a>
		</li>
	{/each}
</ul>
