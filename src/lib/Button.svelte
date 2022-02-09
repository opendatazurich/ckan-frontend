<script lang="ts">
	export let href = '';
	export let secondary = false;
	export let icon = '';
</script>

{#if href}
	<a {href} class:var_secondary={secondary} class="mod_button{icon ? ` icon_ico_${icon}` : ''}"
		><slot /></a
	>
{:else}
	<button
		on:click
		class:var_secondary={secondary}
		class="mod_button{icon ? ` icon_ico_${icon}` : ''}"><slot /></button
	>
{/if}

<style>
	/* hacky centering of icon font */
	*::before {
		position: relative;
		top: 0.1rem;
		padding: 0 0.5rem 0 0.25rem;
	}
	a,
	button {
		padding: 0.4rem 0.8rem;
		margin: 0;
	}
	.mod_button {
		color: var(--color-white);
		height: 2.5rem;
	}
	.var_secondary {
		color: var(--color-zuriblau);
	}
</style>
