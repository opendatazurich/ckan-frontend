<script lang="ts">
	import FileFormats from './FileFormats.svelte';

	import { page } from '$app/stores';
	export let datasets = [];
	export let cols = false;
	export let pathPrefix = '';
	$: getPath = (name) => (pathPrefix ? `${pathPrefix}/${name}` : `${$page.url.pathname}/${name}`);
</script>

<hr />
{#if datasets.length}
	<div class="ticker">
		{#each datasets as dataset (dataset.id)}
			<div class="row">
				<a sveltekit:prefetch href={getPath(dataset.name)} class="ticker_link">
					<h4 class="title">{dataset.truncated_title}</h4>
				</a>
				<div class:cols>
					{#if dataset.image_url}
						<a sveltekit:prefetch href={getPath(dataset.name)}>
							<img alt={dataset.title} src={dataset.normalized_image_url} />
						</a>
					{/if}

					<p>
						{dataset.truncated_notes}
					</p>
				</div>

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
	img {
		margin: 1rem 0;
		width: 100%;
	}
	.cols {
		display: grid;
		grid-template-columns: 1fr;
	}
	@media (min-width: 800px) {
		.cols {
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}
	}
</style>
