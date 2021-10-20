<script lang="ts">
	export let tags = [];
</script>

{#each tags as tag}
	<a class="tag" href="/dataset?tags={tag}">{tag}</a>&nbsp;
{/each}
