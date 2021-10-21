<script lang="ts">
	import { clickOutside } from '$lib/actions';
	export let dataset;
	export let resource;
	let open = false;
</script>

<div use:clickOutside={() => (open = false)} class="dropdown btn-group" class:open>
	<a
		href="#"
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
			<a href="/dataset/{dataset.name}/resource/{resource.resource_id}">
				<i class="fa fa-info-circle" />
				Mehr Information
			</a>
		</li>

		<li>
			<a href={resource.url} class="resource-url-analytics" target="_blank">
				<i class="fa fa-external-link" />
				Zur Ressource
			</a>
		</li>
	</ul>
</div>
