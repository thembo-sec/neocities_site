<script lang="ts">
	import '../app.postcss';
	import '$lib/GitHubLogo.svelte';
	import {
		AppBar,
		AppRail,
		LightSwitch,
		AppRailAnchor,
		TabGroup,
		TabAnchor
	} from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import GitHubLogo from '$lib/GitHubLogo.svelte';
	let currentTile: number = 0;
	let currentTab: number = 0;

	export let data;
</script>

<title>Confused Ramblings</title>
<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="sticky p-1">
		<AppBar slotTrail="place-content-end" gridColumns="grid-cols-3">
			<svelte:fragment slot="lead">
				<a href="/">Scylla's Blog</a>
			</svelte:fragment>
			<TabGroup
				justify="justify-centre"
				active="variant-filled-primary"
				hover="hover:variant-soft-primary"
				flex="flex-1 lg:flex-none"
				rounded=""
				border="border-b border-surface-400-500-token"
				class="bg-surface-200-700-token w-full"
			>
				<TabAnchor
					bind:group={currentTab}
					href="/about"
					name="tile-about"
					value={1}
					selected={$page.url.pathname === '/about'}
					title="About"
				>
					<span>About</span>
				</TabAnchor>
				<TabAnchor
					href="/posts"
					bind:group={currentTab}
					name="tile-posts"
					value={0}
					title="Posts"
					selected={$page.url.pathname === '/posts'}
				>
					<span>Posts</span>
				</TabAnchor>
			</TabGroup>
			<svelte:fragment slot="trail">
				<div class="grid grid-cols-4">
					<div></div>
					<div>
						<LightSwitch />
					</div>
					<div>
						<GitHubLogo
							viewBoxSetting={'-400 -25 550 150'}
							scale="2"
							heightSetting={'100%'}
							widthSetting={'100%'}
						></GitHubLogo>
					</div>
				</div></svelte:fragment
			>
		</AppBar>
	</header>
	<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
		<main class="space-y-4 p-1">
			<slot />
		</main>
	</div>
</div>
