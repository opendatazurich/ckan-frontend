<script lang="ts">
	$: links = [
		{ title: 'Daten & Ressourcen', href: '#dataset' },
		{ title: 'Kategorien', href: '#category' },
		{ title: 'Showcases', href: '#showcase' }
	];
</script>

<header class="page_title">
	{#each links as link}
		<a href={link.href} class="mod_linkicon" title={link.title}>
			<svg viewBox="0 0 11 11" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 3.5V10H3.5" />
				<path d="M1 1L10 10" />
			</svg>
			<span>
				{link.title}
			</span>
		</a>
	{/each}
	<hr />
</header>

<style>
	header {
		display: grid;
		border-bottom: 1px solid #dedede;
		margin-top: -1rem;
	}
	span {
		margin-left: 1rem;
		text-decoration: underline;
	}
	svg {
		width: 1em;
		heigth: 1em;
	}
	a {
		text-decoration: none;
		padding-top: 0.5rem;
	}
	@media (min-width: 800px) {
		header {
			grid-template-columns: repeat(3, 1fr);
		}
		a {
			padding-top: 1rem;
		}
	}
</style>
