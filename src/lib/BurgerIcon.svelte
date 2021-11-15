<script lang="ts">
	export let open = false;
	export let title;
	const toggle = () => (open = !open);
</script>

<button on:click={toggle} class="btn_burger" class:is_open={open} aria-expanded={open}>
	<span class="text">{title}</span>
	<div class="icon_burger">
		<span class="icon_burger_bar" />
		<span class="icon_burger_bar" />
		<span class="icon_burger_bar" />
	</div>
</button>

<style>
	button {
		border: none;
	}
</style>
