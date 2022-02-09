<script lang="ts">
	import marked from 'marked';
	marked.setOptions({ pedantic: true });

	export let notes = '';

	const markup = marked(notes.trim());
</script>

<h3>Beschreibung</h3>
<div class="notes embedded-content">
	{@html markup}
</div>
