<script lang="ts">
	export let fields = [];
</script>

<section class="mod_table var_no_hover">
	<div class="table">
		<table>
			<thead>
				<tr>
					<th>Feld</th>
					<th>Wert</th>
				</tr>
			</thead>
			<tbody>
				{#each fields as field}
					<tr>
						<th class="header">{field.title}</th>
						<td class="content">{field.value}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	.table {
		overflow-x: scroll;
	}
	@media (min-width: 800px) {
		.header {
			white-space: nowrap;
		}
	}
</style>
