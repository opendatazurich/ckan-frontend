<script lang="ts">
	import { truncate } from './string';

	export let dataset: { name: string; resources: any[] };
	export let resource;
</script>

<section class="module module-narrow resources">
	<h2 class="module-heading"><i class="fa fa-files-o" /> Ressourcen</h2>

	<ul class="unstyled nav nav-simple">
		{#each dataset.resources as r}
			<li class="nav-item" class:active={r === resource}>
				<a href="/dataset/{dataset.name}/resource/{r.id}"
					><span>{truncate(r.name, 22, ' ...', false)}</span></a
				>
			</li>
		{/each}
	</ul>
</section>
