<script>
  import { page } from '$app/state';
  import '../app.css';
  let { children } = $props();
</script>

<div class={page.data.theme}>
  {@render children()}
</div>
