<script>
  import { page } from '$app/state';
  import '../app.css';
  import NavMenu from './NavMenu.svelte';
  let { children } = $props();
</script>

<div class={page.data.theme}>
  <div class="page-wrapper">
    <div class="container">
      <NavMenu className="page-nav" />
      <main>
        {@render children()}
      </main>
    </div>
  </div>
</div>

<style>
  .page-wrapper {
    height: 100vh;
    width: 100%;
  }
  .container {
    display: flex;
    padding: 50px;
    margin: 0 auto;
    width: 1440px;
  }

  :global(.page-nav) {
    flex-shrink: 0;
  }

  main {
    padding: 100px 70px;
    width: 100%;
  }
  .page-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .mango .page-wrapper::before {
    background: url('$lib/assets/shrine.png') repeat;
    background-size: 30px;
    opacity: 0.5;
  }
</style>
