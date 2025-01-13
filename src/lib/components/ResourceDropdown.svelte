<script lang="ts">
	import { clickOutside } from '$lib/actions';
	export let dataset: any;
	export let resource: any;
	let open = false;
</script>

<div use:clickOutside={() => (open = false)} class="dropdown btn-group" class:open>
	<a
		href="javascript;"
		on:click={() => (open = !open)}
		class="btn btn-primary dropdown-toggle"
		data-toggle="dropdown"
	>
		<i class="fa fa-share" />
		Entdecke
		<span class="caret" />
	</a>
	<ul class="dropdown-menu">
		<li>
			<a href="/dataset/{dataset.name}/resource/{resource.id}">
				<i class="fa fa-info-circle" />
				Mehr Information
			</a>
		</li>

		<li>
			<a rel="noreferrer" href={resource.url} class="resource-url-analytics" target="_blank">
				<i class="fa fa-external-link" />
				Zur Ressource
			</a>
		</li>
	</ul>
</div>
