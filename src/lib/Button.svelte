<script lang="ts">
	export let href = '';
	export let secondary = false;
	export let icon = '';
</script>

{#if href}
	<a
		rel="external"
		{href}
		class:var_secondary={secondary}
		class="mod_button{icon ? ` icon_ico_${icon}` : ''}"><slot /></a
	>
{:else}
	<button
		on:click
		class:var_secondary={secondary}
		class="mod_button{icon ? ` icon_ico_${icon}` : ''}"><slot /></button
	>
{/if}

<style>
	/* better icon positioning */
	::before {
		position: relative;
		top: 2px;
		right: 6px;
	}
	/* line-height is ignored on windows, setting the height forces the button content to be centered */
	.mod_button {
		line-height: 3rem;
		height: 3rem;
		padding: 0 1rem 0 1rem;
	}
	.var_secondary {
		color: var(--color-zuriblau);
	}
</style>
