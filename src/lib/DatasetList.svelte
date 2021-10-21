<script lang="ts">
	import FileFormats from './FileFormats.svelte';

	export let datasets = [];
	function shorten(str: string, length = 178, ellipsis = '...') {
		if (str.length <= length) {
			return str;
		}
		let trimmedString = str.substr(0, length);

		trimmedString = trimmedString.substr(
			0,
			Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
		);

		return trimmedString + ellipsis;
	}
	function removeMarkdown(str: string) {
		return str.replaceAll('**', '').replaceAll('&quot;', '"');
	}
</script>

<ul class="dataset-list unstyled">
	{#each datasets as dataset (dataset.id)}
		<li class="dataset-item">
			<div class="dataset-content">
				<h3 class="dataset-heading">
					<a href="/dataset/{dataset.name}">{dataset.title}</a>
				</h3>
				<div>
					{shorten(removeMarkdown(dataset.notes))}
				</div>
			</div>

			<FileFormats href="/dataset/{dataset.name}" resources={dataset.resources} />
		</li>
	{/each}
</ul>
