<script lang="ts">
	export let hasShowcases = true;
	export let hasGroups = true;
	let links = [{ title: 'Daten & Ressourcen', href: '#dataset' }];
	$: {
		if (hasGroups) {
			links.push({ title: 'Kategorien', href: '#category' });
		}
		if (hasShowcases) {
			links.push({ title: 'Showcases', href: '#showcase' });
		}
		links = links;
	}
</script>

<header>
	<div class="links">
		{#each links as link}
			<a href={link.href} title={link.title}>
				<svg
					viewBox="0 0 11 11"
					fill="none"
					stroke="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M10 3.5V10H3.5" />
					<path d="M1 1L10 10" />
				</svg>
				<span>
					{link.title}
				</span>
			</a>
		{/each}
	</div>
</header>

<style>
	header {
		border-bottom: 1px solid #dedede;
	}
	.links {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 1.6rem;
	}
	span {
		margin-left: 1rem;
		text-decoration: underline;
	}
	svg {
		width: 1em;
		height: 1em;
	}
	a {
		text-decoration: none;
		padding-top: 0.5rem;
	}
	@media (min-width: 800px) {
		.links {
			flex-direction: row;
		}
		a {
			padding-top: 1rem;
		}
	}
</style>
