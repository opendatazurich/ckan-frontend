<script lang="ts">
	import { page } from '$app/stores';
	export let value = $page.query.get('q');
	export let placeholder = 'Suchen...';
	export let inputElement;
</script>

<div class="search-input control-group search-giant">
	<input
		bind:this={inputElement}
		on:keydown
		on:input
		type="text"
		class="search"
		name="q"
		{value}
		autocomplete="off"
		{placeholder}
	/>

	<button type="submit" value="search">
		<i class="fa fa-search" />
		<span>Abschicken</span>
	</button>
</div>
