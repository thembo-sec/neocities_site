import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { Post } from '$lib/types'
import type { Plugin, ResolvedConfig } from 'vite';
import path from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs-extra';


function writeRss(): Plugin {
	let config: ResolvedConfig;

	let posts: Post[] = [];

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>Ash's Incoherrent rambling</title>
				<description>Random Thoughts</description>
				<link>https://scylla.neocities.org</link>
				<atom:link href="https://scylla.neocities.org/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
			.map(
				(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>https://scylla.neocities.org/${post.slug}</link>
							<guid isPermaLink="true">https://scylla.neocities.org/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
			)
			.join('')}
			</channel>
		</rss>
	`.trim()

	return {
		name: 'rss-write',
		apply: 'build',
		configResolved(_config) {
			config = _config;
			console.log("Parsing RSS");
		},
		writeBundle() {
			const filePath = path.resolve(config.root, 'static', 'rss.xml');
			fs.ensureFileSync(filePath);
			fs.writeFile(filePath, xml);
		}
	}
}


export default defineConfig({
	plugins: [sveltekit(), purgeCss(), writeRss()]
});