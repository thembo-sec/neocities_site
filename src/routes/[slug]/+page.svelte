<script lang="ts">
	import { formatDate } from '$lib/utils';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>

	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="content">
	<article>
		<div class="m-5">
			<!-- Title -->
			<hgroup class="m-5">
				<h1 class="h1">
					{data.meta.title}
				</h1>
				<p>
					Published at {formatDate(data.meta.date)}
					{#if data.meta.edited != ''}| Last edit at {formatDate(data.meta.edited)}{/if}
				</p>
			</hgroup>

			<!-- Post -->
			<div class="prose">
				<svelte:component this={data.content} />
			</div>
		</div>
	</article>
</div>

<style>
	article {
		min-height: calc(100vh - 95px);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		vertical-align: middle;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: 1em;
		margin-bottom: 0.1em;
	}
</style>
