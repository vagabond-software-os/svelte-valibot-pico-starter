import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'typescript-svelte-plugin',
			// the following options can be set additionally; they are optional; their default values are listed here
			enabled: true, // enables this plugin
			assumeIsSvelteProject: false // if true, skip detection and always assume it's a Svelte project
		}
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
