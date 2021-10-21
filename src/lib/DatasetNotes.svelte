<script lang="ts">
	import md from 'marked';
	export let notes = '';

	const markup = md(notes.trim());
</script>

<div class="notes embedded-content">
	{@html markup}
</div>
