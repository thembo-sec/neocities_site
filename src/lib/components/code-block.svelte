<script lang="ts" module>
	import { createHighlighter } from 'shiki/index.mjs';
	import { createJavaScriptRegexEngine } from 'shiki/index.mjs';

	const highlighter = await createHighlighter({
		themes: ['catppuccin-macchiato'],
		langs: ['javascript', 'typescript', 'python'],
		engine: createJavaScriptRegexEngine()
	});
</script>
