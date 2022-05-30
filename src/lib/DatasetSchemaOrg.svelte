<script lang="ts">
	import { serialize } from './jsonld';

	export let jsonld: any;
</script>

{@html serialize(jsonld)}
