<script lang="ts">
	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	const easing = linear;
	export let open = false;
	export let title = '';
	function toggle() {
		open = !open;
	}
</script>

<div class="mod_accordion">
	<button
		on:click|preventDefault={toggle}
		class="trigger"
		class:is_active={open}
		aria-expanded={open}
	>
		<span class="trigger_title"
			>{title}
			<span class="trigger_title__additonal-text--closed" />
			<span class="trigger_title__additonal-text--opened" />
		</span>

		<span class="trigger_icon" class:is_collapsed={!open} />
	</button>
	{#key open}
		<div transition:slide={{ easing }} class="content" class:is_hidden={!open}>
			<slot />
		</div>
	{/key}
</div>

<style>
	button {
		width: 100%;
	}
</style>
