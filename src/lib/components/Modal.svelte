<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from '$lib/actions';
	const dispatch = createEventDispatcher();
	function keydown(e: KeyboardEvent) {
		if (e.code === 'Escape') {
			dispatch('close');
		}
	}
</script>

<svelte:window on:keydown={keydown} />
<div class="dialog" data-modal="dialog">
	<div class="dialog_overlay" tabindex="-1">
		<div style="display: inline-block; height: 100%; vertical-align: middle;" />
		<div use:clickOutside={() => dispatch('close')} class="dialog_content_wrapper">
			<div
				class="dialog_content"
				aria-labelledby="dialogTitle"
				aria-describedby="dialogDescription"
				role="dialog"
			>
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.dialog_content {
		max-width: inherit;
	}
	@media (min-width: 800px) {
		.dialog_content {
			max-width: inherit;
			margin: 0 2rem;
		}
	}
</style>
