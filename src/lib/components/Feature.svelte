<script>
	import { editable } from '$lib/actions/directives';
	export let blok;
</script>

<div use:editable={blok} class="column feature">
	{blok.name}
</div>
