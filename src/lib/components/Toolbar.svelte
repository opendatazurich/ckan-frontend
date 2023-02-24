<script lang="ts">
	export let links = [] as any[];
	$: isLast = (index: number) => index === links.length - 1;
</script>

<nav class="mod_breadcrumb is_loaded" aria-label="Sie befinden sich hier:" data-init="breadcrumb">
	<ul>
		<li class="home">
			<a href="/"><span>Startseite Portal der Stadt Zürich</span></a>
		</li>
		{#each links as link, i}
			{#if isLast(i)}
				<li><span>{link[1]}</span></li>
			{:else}
				<li><a href={link[0]}>{link[1]}</a></li>
			{/if}
		{/each}
	</ul>
</nav>
