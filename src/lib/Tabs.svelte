<script lang="ts">
	export let links;
</script>

<ul class="nav nav-tabs">
	{#each links as { href, title, icon, active }}
		<li class:active>
			<a {href}><i class="fa fa-{icon}" /> {title}</a>
		</li>
	{/each}
</ul>
