<script>
	import { editable } from '$lib/actions/directives';
	export let blok;
</script>

<div use:editable={blok} class="teaser">
	{blok.headline}
</div>
