<script lang="ts">
	import FileFormats from './FileFormats.svelte';
	import { removeMarkdown, truncate } from '$lib/string';

	export let datasets = [];
</script>

<hr />
{#if datasets.length}
	<div class="ticker">
		{#each datasets as dataset (dataset.id)}
			<div class="row">
				<a sveltekit:prefetch href="/dataset/{dataset.name}" class="ticker_link">
					<h4 class="title">{truncate(dataset.title, 80)}</h4>
				</a>
				<p>
					{truncate(removeMarkdown(dataset.notes), 180)}
				</p>

				<FileFormats resources={dataset.resources} />
			</div>
		{/each}
	</div>
{:else}
	<p class="extra">Bitte versuch es mit einer anderen Suche.</p>
{/if}
