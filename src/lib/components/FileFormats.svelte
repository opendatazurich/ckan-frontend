<script lang="ts">
	import Box from './Box.svelte';

	export let resources: { format: string }[];

	const formats = Object.keys(
		resources
			.map((resource) => resource.format.toLocaleLowerCase())
			.reduce((obj, format) => {
				obj[format] = true;
				return obj;
			}, {} as { [key: string]: boolean })
	);
</script>

<div class="formats">
	{#each formats as format}
		<Box>{format}</Box>
	{/each}
</div>

<style>
	.formats {
		display: flex;
		flex-wrap: wrap;
		color: #0f05a0;
	}
</style>
