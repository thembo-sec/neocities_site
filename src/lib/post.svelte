<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export var pageSource: string = '';
</script>

<SvelteMarkdown source={pageSource}></SvelteMarkdown>
