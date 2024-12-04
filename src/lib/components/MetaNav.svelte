<script lang="ts">
	export let links = [
		{ href: 'https://www.stadt-zuerich.ch/opendata', title: 'Open Data Portal' },
		{
			href: 'https://www.stadt-zuerich.ch/de/politik-und-verwaltung/statistik-und-daten/open-government-data/anwendungen.html',
			title: 'Anwendungen'
		},
		{ href: 'https://www.stadt-zuerich.ch/de/politik-und-verwaltung/statistik-und-daten/open-government-data/werkstatt.html', title: 'Werkstatt' }
	];
</script>

<nav class="mod_metanav">
	<ul>
		{#each links as { href, title }}
			<li><a {href}>{title}</a></li>
		{/each}
	</ul>
</nav>
