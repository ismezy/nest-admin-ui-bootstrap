import preprocess from 'svelte-preprocess';
import { loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import adapter from '@sveltejs/adapter-static';

const env = loadEnv(process.env.NODE_ENV || '', process.cwd(), '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    prerender: {
      default: false
    },
    vite: () => ({
      plugins: [
        viteMockServe({
          // default
          mockPath: 'mock',
          localEnabled: env.MOCK === 'true'
        })
      ]
    })
  }
};

export default config;
