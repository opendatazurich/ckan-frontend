<script lang="ts">
	import FileFormats from './FileFormats.svelte';
	import { removeMarkdown, truncate } from '$lib/string';

	export let datasets = [];
</script>

{#if datasets.length}
	<div class="ticker">
		<h3 id="webpages" class="section_title">Datensätze</h3>
		{#each datasets as dataset (dataset.id)}
			<div class="row">
				<a sveltekit:prefetch href="/dataset/{dataset.name}" class="ticker_link">
					<h4 class="title">{truncate(dataset.title, 80)}</h4>
					<p>
						{truncate(removeMarkdown(dataset.notes), 180)}
					</p>
					<FileFormats href="/dataset/{dataset.name}" resources={dataset.resources} />
				</a>
			</div>
		{/each}
	</div>
{:else}
	<p class="extra">Bitte versuch es mit einer anderen Suche.</p>
{/if}
<!--
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
-->
