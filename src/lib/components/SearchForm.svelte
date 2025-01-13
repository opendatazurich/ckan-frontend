<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import AutoSuggestionField from './AutoSuggestionField.svelte';
	import SortControl from './SortControl.svelte';
	export let autocomplete = false;
	export let placeholder = 'Datensätze suchen...';
	$: q = $page.url.searchParams.get('q');

	function submit(e: SubmitEvent) {
		const query = new URLSearchParams(new FormData(e.target as any) as any);
		query.delete('page');

		goto(`?${query}`, { keepFocus: true, noScroll: true });
	}

	function reset() {
		goto('?', { keepFocus: true, noScroll: true });
	}

	export let options = [
		{ id: 'score desc, date_last_modified desc', title: 'Relevanz' },
		{ id: 'title_string asc', title: 'Name aufsteigend' },
		{ id: 'title_string desc', title: 'Name absteigend' },
		{ id: 'date_last_modified desc', title: 'Zuletzt geändert' }
	];
</script>

<form on:submit|preventDefault={submit} on:reset|preventDefault={reset}>
	<h2>Suchen</h2>
	<div class="layout_columns var_two_columns">
		<div class="layout_column">
			<div class="mod_formautocomplete">
				<label class="top_label" for="q">Suchen nach:</label>
				<div class="mod_formtextinput" id="q">
					{#if autocomplete}
						<AutoSuggestionField {placeholder} />
					{:else}
						<input
							type="text"
							name="q"
							value={q}
							aria-describedby="search_description"
							class="ui-autocomplete-input"
							autocomplete="off"
						/>
					{/if}
				</div>
			</div>
		</div>
		<div class="layout_column">
			<SortControl {options} />
		</div>
		<div class="layout_column" />
		<div class="layout_column">
			<div class="buttons">
				<input type="reset" class="mod_button var_secondary" value="Zurücksetzen" />
				<input type="submit" class="mod_button var_large" value="Suchen" />
			</div>
		</div>
	</div>
</form>
