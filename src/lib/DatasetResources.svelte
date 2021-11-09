<script lang="ts">
	import { getType } from './dataTypes';

	import ResourceDropdown from './ResourceDropdown.svelte';
	import { truncate } from './string';

	export let dataset: { name: string; resources: any[] } = {} as any;
</script>

<section id="dataset-resources" class="resources">
	<h3>Daten und Ressourcen</h3>

	<ul class="resource-list">
		{#each dataset.resources as resource}
			<li class="resource-item" data-id={resource.id}>
				<a
					class="heading"
					href="/dataset/{dataset.name}/resource/{resource.id}"
					title={resource.name}
				>
					{resource.name}<span
						class="format-label"
						property="dc:format"
						data-format={resource.format.toLowerCase()}>CSV</span
					>
				</a>

				<p class="description">
					{getType(resource.format).description}
					{truncate(getType(resource.format).link, 50, '...', false)}
				</p>

				<ResourceDropdown {resource} {dataset} />
			</li>
		{/each}
	</ul>
</section>
