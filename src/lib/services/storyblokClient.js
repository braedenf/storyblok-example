// @ts-nocheck
import StoryblokClient from 'storyblok-js-client';

const client = new StoryblokClient({
	accessToken: import.meta.env.VITE_STORYBLOK_PUBLIC_TOKEN
});

export const defaultRequestConfig = {
	version: 'draft'
};

export default client;
