<script lang="ts">
	import FileFormats from './FileFormats.svelte';

	export let datasets = [];
</script>

<ul class="dataset-list unstyled">
	{#each datasets as dataset}
		<li class="dataset-item">
			<div class="dataset-content">
				<h3 class="dataset-heading">
					<a href="/dataset/{dataset.name}">{dataset.title}</a>
				</h3>
				<div>
					{dataset.notes}
				</div>
			</div>

			<FileFormats href="/dataset/{dataset.name}" resources={dataset.resources} />
		</li>
	{/each}
</ul>
