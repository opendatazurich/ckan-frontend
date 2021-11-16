<script lang="ts">
	import { page } from '$app/stores';
	let value = $page.query.get('q');
	export let placeholder = 'Suchen...';
	export let inputElement = null;
</script>

<input
	bind:this={inputElement}
	on:keydown
	on:input
	type="text"
	class="text"
	name="q"
	{value}
	{placeholder}
	autocomplete="off"
/>
<button type="submit" class="search_button" />

<style>
	.text {
		padding: 1.15875rem 3rem 1.15875rem 1.15875rem !important;
	}
</style>
