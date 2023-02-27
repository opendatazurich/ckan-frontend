<script lang="ts">
	function open() {
		document.body.classList.add('filters-modal');
	}
</script>

<button on:click|preventDefault={open} class="show-filters btn">Ergebnisse filtern</button>
