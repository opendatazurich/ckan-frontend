<script lang="ts">
	export let dataset = {} as any;
</script>

<section class="module module-narrow module-shallow license">
	<h3 class="module-heading"><i class="fa fa-lock" /> Lizenz</h3>

	<p class="module-content">
		<a href={dataset.license_url} rel="dc:rights" target="_blank">{dataset.license_title}</a>

		<a
			href="http://opendefinition.org/okd/"
			title="Dieser Datensatz entspricht der Open Definition."
			target="_blank"
		/>
	</p>
</section>
