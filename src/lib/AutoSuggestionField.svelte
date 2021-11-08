<script lang="ts">
	import { get } from '$lib/api';
	import SearchField from './SearchField.svelte';
	export let placeholder = '';
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
		inputElement.value = searchResult;
		inputElement.focus();
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

<div class="autocomplete">
	<SearchField bind:inputElement {placeholder} on:keydown={keydown} on:input={onChange} />
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
