<script lang="ts">
	export let count: number;
	export let q: string;
</script>

<h2 class="total">
	Suchergebnis: <span class="total">{count} Treffer {q ? `für "${q}"` : ''}</span>
</h2>
