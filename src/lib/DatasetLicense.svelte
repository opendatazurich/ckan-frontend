<script lang="ts">
	export let dataset = {} as any;
</script>

<section class="module module-narrow module-shallow license">
	<h2 class="module-heading"><i class="fa fa-lock" /> Lizenz</h2>

	<p class="module-content">
		<a href={dataset.license_url} rel="dc:rights" target="_blank">{dataset.license_title}</a>

		<a
			href="http://opendefinition.org/okd/"
			title="Dieser Datensatz entspricht der Open Definition."
			target="_blank"
		>
			<img
				class="open-data"
				src="//assets.okfn.org/images/ok_buttons/od_80x15_blue.png"
				alt="[Open Data]"
			/>
		</a>
	</p>
</section>
