import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { Post } from '$lib/types'
import type { Plugin, ResolvedConfig } from 'vite';
import path from 'path';
import fm from 'yaml-front-matter';
import fs from 'fs-extra';
import { enhancedImages } from '@sveltejs/enhanced-img';


/**  
 * This plugin takes each post and adds it to the RSS feed.
 * 
 * The feed is written to /static as that is constant during the build process.
*/
function writeRss(): Plugin {

	let config: ResolvedConfig;

	let posts: Post[] = [];

	const mdPath = path.resolve('src', 'posts');

	let files = fs.readdirSync(mdPath);

	// populate the post class with the metadata from the markdown
	files.forEach(file => {
		const data = fs.readFileSync(path.resolve('src', 'posts', file));
		let content = fm.loadFront(data);

		const post: Post = {
			title: content.title,
			description: content.description,
			categories: content.categories,
			date: content.date,
			slug: content.slug,
			edited: content.edited,
			published: content.published
		};
		
		posts.push(post);

	})


	return {
		name: 'rss-write',
		apply: 'build',
		configResolved(_config) {
			config = _config;
			console.log("Parsing RSS");
		},
		writeBundle() {
			const filePath = path.resolve(config.root, 'static', 'rss.xml');
   const buildPath = path.resolve(config.root, 'build', 'rss.xml');

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
			`.trim();

			fs.ensureFileSync(filePath);
			fs.writeFile(filePath, xml);

   fs.ensureFileSync(buildPath);
   fs.writeFile(buildPath, xml);
		}
	}
}


export default defineConfig({
	plugins: [sveltekit(), purgeCss(), writeRss(), enhancedImages()]
});