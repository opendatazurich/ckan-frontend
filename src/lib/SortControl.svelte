<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let options = [
		{ id: 'title asc', title: 'Name aufsteigend' },
		{ id: 'title desc', title: 'Name absteigend' }
	];
	$: query = new URLSearchParams($page.url.searchParams);
	$: value = query.get('sort') || options[0].id;

	function onChange(e) {
		query.set('sort', e.target.value);
		query.delete('page');
		goto(`?${query}`, { keepfocus: true, noscroll: true });
	}
</script>

<div class="sort">
	<label class="top_label" for="q_topic">Sortieren nach:</label>
	<select {value} on:change={onChange} name="sort" id="q_topic">
		{#each options as option}
			<option selected={option.id === value} value={option.id}>{option.title}</option>
		{/each}
	</select>
</div>

<style>
	.sort {
		display: flex;
		flex-direction: column;
	}
	.sort > select {
		padding: 0.5rem 0.75rem;
		font-size: 1rem;
		border: 1px solid #999;
		border-radius: 3px;
		margin: 0.625rem 0;
	}

	@media (min-width: 1024px) {
		.sort > select {
			height: 3rem;
		}
	}
</style>
