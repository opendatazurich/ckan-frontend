<script lang="ts">
	export let dataset: { tags: any[] };
	export let path = '/dataset';
</script>

<h3>Tags</h3>
{#if dataset.tags}
	<div class="tags">
		{#each dataset.tags as tag}
			<a class="tag" href="{path}?tags={tag.name}">{tag.display_name}</a>&nbsp;
		{/each}
	</div>
{/if}

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		color: #0f05a0;
	}
	.tag {
		text-decoration: none;
		color: #0f05a0;
		border: 1px solid #0f05a0;
		padding: 0.25em 0.5em;
		margin-right: 0.25em;
		margin-top: 0.25em;
		transition: color 200ms linear;
	}
	.tag:hover {
		color: white;
		background-color: #0f05a0;
	}

	a:visited {
		color: #0f05a0;
	}
</style>
