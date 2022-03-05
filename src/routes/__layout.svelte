<script context="module">
	import client, { defaultRequestConfig } from '$lib/services/storyblokClient.js';

	export async function load() {
		const stories = await client.getAll('cdn/stories', defaultRequestConfig);

		return {
			stuff: stories,
			props: { stories }
		};
	}
</script>

<script>
	// @ts-nocheck

	import Nav from '$lib/components/Nav.svelte';

	export let stories;

	let navlinks = [];

	if (stories) {
		stories.forEach((story) => {
			navlinks.push({ route: story.slug, name: story.name });
		});
	}
</script>

<header>
	<Nav links={navlinks} />
</header>

<main>
	<slot />
</main>
