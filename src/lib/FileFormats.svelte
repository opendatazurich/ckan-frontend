<script lang="ts">
	export let resources: { format: string }[];

	const formats = Object.keys(
		resources
			.map((resource) => resource.format.toLocaleLowerCase())
			.reduce((obj, format) => {
				obj[format] = true;
				return obj;
			}, {})
	);
</script>

<div class="mod_filterlist">
	<ul class="mod_filterlist__list">
		{#each formats as format}
			<li class="mod_filterlist__item">
				<span class="mod_filterlist__button">
					<span class="mod_filterlist__text">{format}</span>
				</span>
			</li>
		{/each}
	</ul>
</div>
