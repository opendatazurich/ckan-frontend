<script lang="ts">
	import { page } from '$app/stores';
	import { get } from '$lib/api';
	import { clickOutside } from '$lib/actions';

	export let placeholder = 'Suchen...';
	let q = $page.query.get('q');

	let searchResults = [];
	let show = false;
	let inputElement;

	async function onChange(e) {
		const value = e.target.value;
		if (value.length > 1) {
			searchResults = Object.values(await get(`ogdzh_autosuggest?q=${value}`));
			show = true;
		} else {
			close();
		}
	}
	function selectResult(searchResult) {
		console.log(searchResult);
		inputElement.value = searchResult;
		close();
	}
	function close() {
		show = false;
	}
	function open() {
		show = true;
	}
	function keydown(e) {
		if (e.code === 'Escape') {
			close();
		}
		if (e.code === 'ArrowDown' && searchResults.length) {
			open();
		}
	}
</script>

<div>
	<div class="search-input control-group search-giant">
		<input
			bind:this={inputElement}
			on:keydown={keydown}
			on:input={onChange}
			type="text"
			class="search"
			name="q"
			value={q}
			autocomplete="off"
			{placeholder}
		/>

		<button type="submit" value="search">
			<i class="fa fa-search" />
			<span>Abschicken</span>
		</button>
	</div>
	<div class:show class="autocomplete-suggestions" style="position: relative;">
		{#each searchResults as searchResult}
			<div on:click={() => selectResult(searchResult)} class="autocomplete-suggestion ">
				{searchResult}
			</div>
		{/each}
	</div>
</div>

<style>
	.show {
		display: block;
	}
	.autocomplete-suggestion:hover,
	.autocomplete-suggestion:focus {
		background: #f0f0f0;
	}
	.autocomplete-suggestions {
		margin-top: -19px;
	}
</style>
