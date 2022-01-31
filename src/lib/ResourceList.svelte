<script lang="ts">
	import Accordion from './Accordion.svelte';

	import { truncate } from './string';

	export let dataset: { name: string; resources: any[] };
	export let resource;
</script>

<Accordion title="Ressourcen" isStatic nopadding>
	<nav>
		{#each dataset.resources as r}
			<a
				sveltekit:noscroll
				class:active={r === resource}
				href="/dataset/{dataset.name}/resource/{r.id}"
				><span class="bla">{truncate(r.name, 26, ' ...', false)}</span></a
			>
		{/each}
	</nav>
</Accordion>

<style>
	nav {
		display: flex;
		flex-direction: column;
	}
	a {
		padding: 0.25rem 0.5rem;
		text-decoration: none;
		transition: all ease-in 150ms;
		color: var(--color-black);
	}
	.active,
	a:hover {
		background-color: var(--color-grey-20);
	}
</style>
