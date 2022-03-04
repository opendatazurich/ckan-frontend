<script lang="ts">
	export let tags = [];
</script>

<div class="mod_linklist">
	<ul class="linklist">
		{#each tags as tag}
			<li class="linklist_item">
				<div class="mod_linklistitem">
					<a href="/dataset?tags={tag}" class="linklistitem var_icon_arrow_right">
						<span>{tag}</span>
						<span class="icon icon_arrow_right" />
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>
