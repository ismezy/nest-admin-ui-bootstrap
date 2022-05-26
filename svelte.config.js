import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

const env = loadEnv(process.env.NODE_ENV || '', process.cwd(), '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: () => ({
			plugins: [
				viteMockServe({
					// default
					mockPath: 'mock',
					localEnabled: env.MOCK
				}),
			],
		}),
	}
};

export default config;
