import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from "mdsvex";
import { enhancedImages } from 'mdsvex-enhanced-images';
import { defaultResolverFactory } from 'mdsvex-enhanced-images'
import { join } from 'path';

import { createHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	remarkPlugins: [enhancedImages,
		{
		  resolve: defaultResolverFactory((path) =>
			join('src', 'assets', 'images', path)
		  )
		}],
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = "text") => {
			const highlighter = await createHighlighter({
				themes: ['catppuccin-macchiato'],
				langs: ['javascript', 'typescript', 'python']
			})
			await highlighter.loadLanguage('javascript', 'typescript', 'python')
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'catppuccin-macchiato' }))
			return `{@html \`${html}\` }`
		}
	},
	layout: {
		_: './src/mdsvex.svelte'
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions),],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: 'warn',
		}
	}

};

export default config;