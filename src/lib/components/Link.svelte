<script>
	let { href, children, ...otherProps } = $props();
</script>

<a class="link" {href} {...otherProps}>
	{@render children()}
</a>

<style>
	a {
		text-decoration: none;
		color: var(--text-color-black);
	}
</style>
