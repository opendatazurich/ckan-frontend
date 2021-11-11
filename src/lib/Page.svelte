<script lang="ts">
	export let hero = false;
</script>

<div role="main" class:hero>
	<div class="container">
		<slot />
	</div>
</div>
