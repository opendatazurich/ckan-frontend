<script lang="ts">
	import { getType } from './dataTypes';
	import FileIcon from './FileIcon.svelte';

	import ResourceDropdown from './ResourceDropdown.svelte';
	import { truncate } from './string';

	export let dataset: { name: string; resources: any[] } = {} as any;
</script>

<section id="dataset-resources" class="resources">
	<h3>Daten und Ressourcen</h3>

	{#each dataset.resources as resource}
		<div class="resource">
			<FileIcon type={resource.format} />
			<div class="resource-description">
				<a class="" href="/dataset/{dataset.name}/resource/{resource.id}" title={resource.name}>
					{resource.name}
				</a>
				<div>{getType(resource.format).description}</div>
				<div class="download">
					<span class="icon_ico_download" />
					<a class="download-link" href={resource.url}> Download</a>
				</div>
			</div>
			<div class="resource-icon">
				<span class="icon_ico_arrow_small_right" />
			</div>
		</div>
	{/each}
</section>

<style>
	h3 {
		border-bottom: 1px solid var(--color-zh-grey-3);
		padding-bottom: 1rem;
		margin: 0;
	}
	.resource {
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-zh-grey-3);
		display: flex;
	}
	.resource-description {
		padding-left: 1rem;
		flex: 1;
	}
	.resource-icon {
		display: flex;
		align-items: center;
	}
	.download {
		display: flex;
		align-items: center;
		color: var(--color-zuriblau);
	}
	.download-link {
		padding-left: 0.5rem;
	}
	@media (min-width: 800px) {
		h3 {
			padding-bottom: 2rem;
		}
		.resource {
			padding: 2rem 0;
		}
	}
</style>
