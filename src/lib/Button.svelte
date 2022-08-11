<script lang="ts">
	export let href = '';
	export let icon = '';
</script>

{#if href}
	<a rel="external" {href} class={icon ? ` icon_ico_${icon}` : ''}><slot /></a>
{:else}
	<button on:click class={icon ? ` icon_ico_${icon}` : ''}><slot /></button>
{/if}

<style>
	a,
	button {
		padding: 0.6rem 1rem;
		border: 1px solid var(--color-zuriblau);
		border-radius: 2px;
		text-decoration: none;
		color: var(--color-zuriblau);
		transition: all 0.3s;
	}
	a:visited {
		color: var(--color-zuriblau);
	}
	a::before,
	button::before {
		position: relative;
		top: 0.2rem;
		padding: 1rem 0.5rem 1rem 0;
	}

	a:hover,
	button:hover {
		background: var(--color-active);
		color: var(--color-white);
	}

	.var_secondary {
		color: var(--color-zuriblau);
	}
</style>
