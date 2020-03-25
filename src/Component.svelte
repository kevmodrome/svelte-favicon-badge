<script>
	import { badge } from './badge.js'
	export let count = 0;
	export let background = "#FF0000"
	export let color = "#FFFFFF"
	export let href;
</script>
<svelte:head>
	<link use:badge={{count, background, color}} rel="icon" {href} type="image/png" sizes="128x128">
</svelte:head>