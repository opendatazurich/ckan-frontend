<script lang="ts">
	import { slide } from 'svelte/transition';
	export let show = false;
	export let title = 'toggle';
	function toggle() {
		show = !show;
	}
</script>

<div class="accordion-group">
	<div class="accordion-heading">
		<a on:click|preventDefault={toggle} class="accordion-toggle" href="#collapse">{title}</a>
	</div>
	{#if show}
		<div transition:slide|local class="accordion-body">
			<div class="accordion-inner">
				<slot />
			</div>
		</div>
	{/if}
</div>
