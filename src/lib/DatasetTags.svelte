<script lang="ts">
	export let dataset: { tags: any[] };
</script>

<section class="tags">
	<ul class="tag-list well">
		{#each dataset.tags as tag}
			<li>
				<a class="tag" href="/dataset?tags={tag.name}">{tag.display_name}</a>
			</li>
		{/each}
	</ul>
</section>
