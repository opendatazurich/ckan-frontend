<script lang="ts">
	import Button from './Button.svelte';

	import { getType } from './dataTypes';
	import FileIcon from './FileIcon.svelte';

	export let dataset: { name: string; resources: any[] } = {} as any;
</script>

<section id="dataset-resources" class="resources">
	{#each dataset.resources as resource}
		<div class="resource">
			<FileIcon type={resource.format} />
			<div class="resource-description">
				<a href="/dataset/{dataset.name}/resource/{resource.id}" title={resource.name}>
					{resource.name}
				</a>
				<div>
					{resource.description ? resource.description : getType(resource.format).description}
				</div>
				<div class="download">
					<Button icon="download" href={resource.url}>Herunterladen</Button>
				</div>
			</div>
		</div>
	{/each}
</section>

<style>
	.resource {
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-zh-grey-3);
		display: flex;
	}
	.resource-description {
		padding-left: 1rem;
		flex: 1;
	}

	.download {
		margin-top: 0.5em;
	}

	@media (min-width: 800px) {
		.resource {
			padding: 2rem 0;
		}
	}
</style>
