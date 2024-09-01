<script lang="ts">
	import '../app.postcss';
	import '$lib/GitHubLogo.svelte';
	import '@fortawesome/fontawesome-free/css/fontawesome.css';
	import '@fortawesome/fontawesome-free/css/brands.css';
	import '@fortawesome/fontawesome-free/css/solid.css';
	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		initializeStores,
		Drawer,
		LightSwitch,
		getDrawerStore
	} from '@skeletonlabs/skeleton';
	import type { AppRailTile, DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import GitHubLogo from '$lib/GitHubLogo.svelte';

	initializeStores();

	let currentTile: number = 0;

	const drawerStore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		id: 'navigationMenu',
		width: 'w-[120px]'
	};

	function openMenu() {
		drawerStore.open(drawerSettings);
	}

	export let data;
</script>

<title>Confused Ramblings</title>
<Drawer position="left">
	<AppRail>
		<AppRailAnchor
			bind:group={currentTile}
			selected={$page.url.pathname === '/about'}
			name="about-tile"
			value={0}
			href="/about"
		>
			<span>About</span>
		</AppRailAnchor>
		<AppRailAnchor
			bind:group={currentTile}
			selected={$page.url.pathname === '/'}
			name="posts-tile"
			value={1}
			href="/"
		>
			<span>Posts</span>
		</AppRailAnchor>
	</AppRail>
</Drawer>
<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="sticky p-1">
		<AppBar
			slotTrail="place-content-end"
			slotDefault="place-content-evenly"
			gridColumns="grid-cols-3"
		>
			<svelte:fragment slot="lead">
				<button type="button" class="btn btn-lg variant-filled" on:click={openMenu}
					><i class="fa-solid fa-bars text-2xl" /></button
				>
			</svelte:fragment>
			<span>Incoherent Ramblings</span>
			<svelte:fragment slot="trail">
				<div>
					<LightSwitch />
				</div>
				<div>
					<GitHubLogo viewBoxSetting={'0 0 100 100'} scale=".6"></GitHubLogo>
				</div>
			</svelte:fragment>
		</AppBar>
	</header>
	<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
		<main class="space-y-4 p-1">
			<slot />
		</main>
	</div>
</div>
