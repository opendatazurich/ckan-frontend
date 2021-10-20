<script lang="ts">
	import { page } from '$app/stores';

	export let placeholder = 'Suchen...';
	let q = $page.query.get('q');
</script>

<div class="search-input control-group search-giant">
	<input type="text" class="search" name="q" value={q} autocomplete="off" {placeholder} />

	<button type="submit" value="search">
		<i class="fa fa-search" />
		<span>Abschicken</span>
	</button>
</div>
