<script lang="ts">
	import { serialize } from '$lib/jsonld';

	export let jsonld: any;
</script>

{@html serialize(jsonld)}
