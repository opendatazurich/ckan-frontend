<script lang="ts">
	export let count;
	export let q;
</script>

<h2 class="total">
	Suchergebnis: <span class="total">{count} Treffer {q ? `für "${q}"` : ''}</span>
</h2>
