<script lang="ts">
	export let dataset = {} as any;
</script>

<section class="module module-narrow module-shallow license">
	<h3 class="module-heading"><i class="fa fa-lock" /> Lizenz</h3>

	<p class="module-content">
		<a href={dataset.license_url} rel="noreferrer" target="_blank">{dataset.license_title}</a>
	</p>
</section>
