<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let options = [
		{ id: 'title asc', title: 'Name aufsteigend' },
		{ id: 'title desc', title: 'Name absteigend' }
	];
	$: query = new URLSearchParams($page.query);
	$: path = $page.path;
	$: value = query.get('sort') || options[0].id;

	function onChange(e) {
		query.set('sort', e.target.value);
		goto(`${path}?${query}`);
	}
</script>

<div class="form-select control-group control-order-by">
	<label for="field-order-by">Sortieren nach</label>
	<select id="field-order-by" name="sort" {value} on:change={onChange}>
		{#each options as option}
			<option value={option.id}>{option.title}</option>
		{/each}
	</select>

	<button class="btn js-hide" type="submit">Los</button>
</div>

<style>
	.js-hide {
		display: none;
	}
</style>
