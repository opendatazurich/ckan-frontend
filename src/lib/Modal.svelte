<div class="dialog" data-modal="dialog">
	<div class="dialog_overlay" tabindex="-1">
		<div style="display: inline-block; height: 100%; vertical-align: middle;" />
		<div class="dialog_content_wrapper">
			<div
				class="dialog_content"
				aria-labelledby="dialogTitle"
				aria-describedby="dialogDescription"
				role="dialog"
			>
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.dialog_content {
		max-width: inherit;
	}
</style>
