<script lang="ts">
	import { formatDate } from '$lib/utils';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.content);
</script>

<article>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}

	.prose :is(h1, h2, h3, h4, h5, h6) {
		color: aliceblue;
		margin-top: var(--size-8);
		margin-bottom: var(--size-3);
	}

	.prose p:not(:is(h2, h3, h4, h5, h6) + p) {
		margin-top: var(--size-7);
	}

	.prose :is(ul, ol) {
		list-style-type: '🔥';
		padding-left: var(--size-5);
	}

	.prose :is(ul, ol) li {
		margin-block: var(--size-2);
		padding-inline-start: var(--size-2);
	}

	.prose pre {
		max-inline-size: 100%;
		padding: 1rem;
		border-radius: 8px;
		tab-size: 2;
	}
</style>
