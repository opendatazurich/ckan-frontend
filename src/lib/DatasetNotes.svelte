<script lang="ts">
	import marked from 'marked';
	marked.setOptions({ pedantic: true });

	export let notes = '';

	const markup = marked(notes.trim());
</script>

<div class="notes embedded-content">
	{@html markup}
</div>
