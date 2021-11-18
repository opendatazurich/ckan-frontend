<script lang="ts">
	export let links = [
		{ href: '/', title: 'Kontakt' },
		{ href: '/medien', title: 'Medien' },
		{ href: '/jobs', title: 'Jobs' }
	];
</script>

<nav class="mod_metanav">
	<ul>
		{#each links as { href, title }}
			<li><a {href}>{title}</a></li>
		{/each}
	</ul>
</nav>
