<script lang="ts">
	import FileFormats from './FileFormats.svelte';
	import { removeMarkdown, truncate } from '$lib/string';
	import { page } from '$app/stores';
	export let datasets = [];
	const getUrl = (path) => `https://data.stadt-zuerich.ch/uploads/showcase/${path}`;
	function normalizeUrl(url: string) {
		url = url || '';
		return url.startsWith('http') ? url : getUrl(url);
	}
</script>

<hr />
{#if datasets.length}
	<div class="ticker">
		{#each datasets as dataset (dataset.id)}
			<div class="row">
				<a sveltekit:prefetch href="{$page.path}/{dataset.name}" class="ticker_link">
					<h4 class="title">{truncate(dataset.title, 80)}</h4>
					{#if dataset.image_url}
						<img class="image" alt={dataset.title} src={normalizeUrl(dataset.image_url)} />
					{/if}
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

<style>
	hr {
		margin-bottom: 2em;
	}
	.image {
		padding: 1em 0;
		width: 100%;
		max-width: 512px;
	}
</style>
