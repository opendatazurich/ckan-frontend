<script lang="ts">
	export let href: string;
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

<ul class="dataset-resources unstyled">
	{#each formats as format}
		<li>
			<a {href} class="label" data-format={format}>{format}</a>
		</li>
	{/each}
</ul>
