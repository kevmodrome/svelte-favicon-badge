# svelte-favicon-badge

A custom component that adds a favicon and a badge that you can use to show for example number of unread messages, etc.

## Example

<p align="center">

![ScreenShot](screenshot.gif)

</p>

## Quick Start

Install via `npm i svelte-favicon-badge` and simply import the component and add it to your markup. It's probably a good idea to only use one per page/route since there could be conflicts.
The options are: `count` `background` `color` and `href`

```html
<script>
	import Badge from "svelte-favicon-badge";
	let count = 0;
	let background = "#FF0000";
	let color = "#FFFFFF";
</script>

<Badge {count} {color} {background} href="favicon.png" />
```

## Browser Support

Should support all modern browsers except Safari. Not tested in IE but is assumed not to work.
