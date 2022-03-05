<script context="module">
	import getComponent from '$lib/components';
	import client, { defaultRequestConfig as reqConfig } from '$lib/services/storyblokClient';

	export async function load({ stuff, params }) {
		const { slug } = params;

		const response = await client.get('cdn/stories/' + slug, reqConfig);

		return {
			props: {
				story: response.data.story || {}
			}
		};
	}
</script>

<script>
	export let story;
</script>

<svelte:head>
	<title>{story.name}</title>
</svelte:head>

<h1>Page: {story.name}</h1>

{#if story.content.component}
	<svelte:component this={getComponent(story.content.component)} blok={story.content} />
{/if}
