<script lang="ts">
	export let fields = [];
	export let headers = ['Feld', 'Wert'];
</script>

<section class="mod_table var_no_hover">
	<div class="table">
		<table>
			<thead>
				<tr>
					{#each headers as header}
						<th>{header}</th>
					{/each}
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
	.header {
		width: 50%;
	}
	@media (min-width: 800px) {
		.header {
			white-space: nowrap;
			width: 25%;
		}
	}
</style>
