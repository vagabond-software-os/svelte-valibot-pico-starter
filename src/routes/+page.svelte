<script lang="ts">
	import 'tippy.js/dist/tippy.css';
</script>

<div class="container" style="padding: 2rem">
	<div>
		<h1>Svelte Starter</h1>
		<p><small>Work in Progress</small></p>
		<h2>Tech Stack</h2>
		<ul>
			<li>Svelte (5)</li>
			<li>Valibot</li>
			<li>PicoCSS</li>
			<li>Vercel</li>
		</ul>
		<h2>Utilities</h2>
		<ul>
			<li>Tippy (Tooltips)</li>
			<li>Modals (PicoCSS)</li>
			<li>Hotkey-JS (Hotkeys)</li>
			<li>Svelte-DnD (Drag and Drop)</li>
		</ul>
	</div>
</div>

<style>
	:root {
		--pico-modal-overlay-background-color: rgba(8, 9, 10, 0.25) !important;
		--pico-color-jade-500: #00895a;
		--pico-color-jade-450: #029764;
		--pico-color-jade-400: #00a66e;
		--pico-color-jade-350: #00b478;
		--pico-color-jade-300: #00c482;
		--pico-color-jade-250: #00cc88;
		--pico-color-jade-200: #21e299;
		--pico-color-jade-150: #39f1a6;
		--pico-color-jade-100: #70fcba;
		--pico-color-jade-50: #cbfce1;
		--pico-color-jade: #007a50;
		--pico-color-purple-500: #b645cd;
		--pico-color-purple-450: #c652dc;
		--pico-color-purple-400: #cd68e0;
		--pico-color-purple-350: #d47de4;
		--pico-color-purple-300: #db90e8;
		--pico-color-purple-250: #e2a3eb;
		--pico-color-purple-200: #e7b6ee;
		--pico-color-purple-150: #edc9f1;
		--pico-color-purple-100: #f2dcf4;
		--pico-color-purple: #9236a4;
		--pico-color-azure-500: #017fc0;
		--pico-color-azure-450: #018cd4;
		--pico-color-azure-400: #029ae8;
		--pico-color-azure-350: #01aaff;
		--pico-color-azure-300: #51b4ff;
		--pico-color-azure-250: #79c0ff;
		--pico-color-azure-200: #9bccfd;
		--pico-color-azure-150: #b7d9fc;
		--pico-color-azure-100: #d1e5fb;
		--pico-color-azure: #0172ad;
	}

	.counter-list li {
		list-style: thumbs;
	}

	@counter-style thumbs {
		system: cyclic;
		symbols: '⚡';
		suffix: ' ';
	}

	.show {
		opacity: 1;
		transform: translateY(0);
		z-index: 2;
	}

	:global(iframe) {
		height: auto;
		aspect-ratio: 16 / 9;
		width: 100%;
		border-radius: 8px;
	}
</style>
