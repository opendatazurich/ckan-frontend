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

<div class="formats">
	{#each formats as format}
		<span class="format">{format}</span>
	{/each}
</div>

<style>
	.formats {
		display: flex;
		flex-wrap: wrap;
		color: #0f05a0;
	}
	.format {
		border: 1px solid #0f05a0;
		padding: 0.25em 0.5em;
		margin-right: 0.25em;
		margin-top: 0.25em;
	}
</style>
