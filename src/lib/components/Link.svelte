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
    text-shadow:
      -1px 0 var(--text-color-blue),
      0 1px var(--text-color-blue),
      1px 0 var(--text-color-blue),
      0 -1px var(--text-color-blue);

    letter-spacing: 2px;
  }
</style>
