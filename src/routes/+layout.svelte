<script>
  import { page } from '$app/state';
  import '../app.css';
  let { children } = $props();
</script>

<div class={page.data.theme}>
  <div class="page-wrapper">
    {@render children()}
  </div>
</div>

<style>
  .page-wrapper {
    height: 100vh;
    width: 100%;
  }
</style>
