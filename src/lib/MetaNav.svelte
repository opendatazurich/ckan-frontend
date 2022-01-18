<script lang="ts">
	export let links = [
		{ href: 'https://www.stadt-zuerich.ch/portal/de/index/ogd.html', title: 'Open Data Portal' },
		{
			href: 'https://www.stadt-zuerich.ch/portal/de/index/ogd/anwendungen.html',
			title: 'Anwendungen'
		},
		{ href: 'https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt.html', title: 'Werkstatt' }
	];
</script>

<nav class="mod_metanav">
	<ul>
		{#each links as { href, title }}
			<li><a {href}>{title}</a></li>
		{/each}
	</ul>
</nav>
