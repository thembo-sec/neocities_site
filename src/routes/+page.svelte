<script lang="ts">
	import type { Post } from "$lib/types";
	import { formatDate } from "$lib/utils";

	let posts: Post[] = [];

	let tags: string = "";

	function filterTags(category: string): void {
		if (tags === category) {
			tags = "";
		} else {
			tags = category;
		}
	}

	const paths = import.meta.glob("/src/posts/*.md", { eager: true });

	for (const path in paths) {
		const file = paths[path];

		const slug = path.split("/").at(-1)?.replace(".md", "");

		if (file && typeof file === "object" && "metadata" in file && slug) {
			const metadata = file.metadata as Omit<Post, "slug">;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) =>
			new Date(second.date).getTime() - new Date(first.date).getTime(),
	);
</script>

<svelte:head>
	<title>Confused Ramblings</title>
</svelte:head>

<section>
	<div class="content">
		<ul class="posts p-10">
			{#each posts as post}
				{#if post.published == true && (tags == "" || post.categories.some((tag) => tag === tags))}
					<li class="post">
						<div class="container h-1/2 mx-auto flex items-center">
							<a href={post.slug} class="h2">{post.title}</a>
						</div>
						<p class="date">{formatDate(post.date)}</p>
						<p class="description">{post.description}</p>
						{#each post.categories as category}
							<button
								class="chip variant-filled-primary hover:variant-filled-secondary"
								on:click={() => filterTags(category)}
							>
								{#if category === tags}
									<span>⤫</span>
									<span></span>
								{/if}
								#{category}
							</button>
						{/each}
						<hr class="dashed" />
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</section>

<style>
	.posts {
		display: grid;
		gap: 3rem;
	}

	.post {
		max-inline-size: var(--text-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}

	hr.dashed {
		margin-top: 10px;
	}

	.chip {
		margin: 10px;
	}
</style>
