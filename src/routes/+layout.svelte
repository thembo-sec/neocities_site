<script lang="ts">
	import '../app.postcss';
	import '$lib/GitHubLogo.svelte';
	import { AppBar, AppRail, AppRailTile, LightSwitch, AppRailAnchor } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import GitHubLogo from '$lib/GitHubLogo.svelte';
	let currentTile: number = 0;

	export let data;
</script>

<title>Confused Ramblings</title>
<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="sticky p-1">
		<AppBar slotTrail="place-content-end">
			Scylla's Blog
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</header>
	<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
		<aside class="sticky p-1">
			<AppRail>
				<AppRailAnchor
					bind:group={currentTile}
					href="/about"
					name="tile-about"
					value={1}
					selected={$page.url.pathname === '/about'}
					title="About"
				>
					<span>About</span>
				</AppRailAnchor>
				<AppRailAnchor
					href="/"
					bind:group={currentTile}
					name="tile-posts"
					value={0}
					title="Posts"
					selected={$page.url.pathname === '/'}
				>
					<span>Posts</span>
				</AppRailAnchor>

				<svelte:fragment slot="trail">
					<AppRailAnchor href="https://github.com/thembo-sec" title="GitHub">
						<GitHubLogo></GitHubLogo>
						<span>GitHub</span>
					</AppRailAnchor>
				</svelte:fragment>
			</AppRail>
		</aside>
		<main class="space-y-4 p-1">
			<slot />
		</main>
	</div>
</div>
