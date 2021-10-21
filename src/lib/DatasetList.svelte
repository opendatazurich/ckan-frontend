<script lang="ts">
	import FileFormats from './FileFormats.svelte';
	import { removeMarkdown, truncate } from '$lib/string';

	export let datasets = [];
</script>

{#if datasets.length}
	<ul class="dataset-list unstyled">
		{#each datasets as dataset (dataset.id)}
			<li class="dataset-item">
				<div class="dataset-content">
					<h3 class="dataset-heading">
						<a href="/dataset/{dataset.name}">{truncate(dataset.title, 80)}</a>
					</h3>
					<div>
						{truncate(removeMarkdown(dataset.notes), 180)}
					</div>
				</div>

				<FileFormats href="/dataset/{dataset.name}" resources={dataset.resources} />
			</li>
		{/each}
	</ul>
{:else}
	<p class="extra">Bitte versuch es mit einer anderen Suche.</p>
{/if}
