<script lang="ts">
	import { truncate } from '$lib/string';
	export let dataset = {} as any;
</script>

<div class="toolbar">
	<ol class="breadcrumb">
		<li class="home"><a href="/"><i class="fa fa-home" /><span> Start</span></a></li>

		<li><a href="/dataset">Datensätze</a></li>
		<li class="active">
			<a class=" active" href="/dataset/{dataset.name}">{truncate(dataset.title, 28)}</a>
		</li>
	</ol>
</div>
