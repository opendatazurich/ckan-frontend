<script lang="ts">
	import { api } from '$lib/api';
	const { getSearch } = api(fetch);
	import { clickOutside } from '$lib/actions';
	import { page } from '$app/stores';
	export let placeholder = 'Suchen...';

	let searchResults = [] as any[];

	let show = false;
	let inputElement: HTMLInputElement;

	$: value = $page.url.searchParams.get('q');

	async function onChange(e: any) {
		const value = e.target.value;
		if (value.length > 1) {
			searchResults = await getSearch(value);
			show = true;
		} else {
			close();
		}
	}
	function selectResult(searchResult: string) {
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
	function keydown(e: any) {
		if (e.code === 'Escape' || e.code === 'Enter') {
			close();
		}
		if (e.code === 'ArrowDown' && searchResults.length) {
			open();
		}
	}
</script>

<div use:clickOutside={close}>
	<div class="mod_formautocomplete">
		<div class="mod_formtextinput">
			<input
				id="search"
				type="text"
				name="q"
				class="ui-autocomplete-input"
				autocomplete="off"
				{value}
				bind:this={inputElement}
				{placeholder}
				on:keydown={keydown}
				on:input={onChange}
			/>
		</div>
	</div>
	{#if show}
		<div class="autocomplete-suggestions">
			{#each searchResults as searchResult}
				<button on:click={() => selectResult(searchResult)} class="autocomplete-suggestion">
					{searchResult}
				</button>
			{:else}
				<div>Keine Treffer zu "{inputElement.value}" gefunden</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.autocomplete-suggestions {
		background-color: var(--color-white);
		color: var(--color-zuriblau);
		padding: 1rem 1rem;
		position: absolute;
		max-height: 21rem;
		overflow-y: scroll;
		border: 1px solid var(--color-active);
		z-index: 2;
	}
	.autocomplete-suggestion {
		padding: 0.25rem 0.5rem;
		transition: color ease-in 100ms;
		border: none;
		background: inherit;
		width: 100%;
		text-align: left;
	}
	.autocomplete-suggestion:hover {
		color: var(--color-white);
		background-color: var(--color-zuriblau);
	}
</style>
