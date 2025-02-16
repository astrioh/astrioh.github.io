<script>
  let { href, children, ...otherProps } = $props();
</script>

<a class="link" {href} {...otherProps}>
  {@render children()}
</a>

<style>
  a {
    text-decoration: none;
  }

  :global(.techno) a,
  :global(.mango) a {
    color: var(--text-color-black);
    text-shadow:
      -1px 0 var(--text-color-blue),
      0 1px var(--text-color-blue),
      1px 0 var(--text-color-blue),
      0 -1px var(--text-color-blue);

    letter-spacing: 2px;
  }

  :global(.art) {
    font-weight: bold;
  }
</style>
