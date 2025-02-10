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
        <div class="content-outer-wrapper">
          <div class="content-inner-wrapper">
            {@render children()}
          </div>
        </div>
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
    padding: 50px 0;
    margin: 0 auto;
    width: 1660px;
    height: 100%;
  }

  :global(.page-nav) {
    flex-shrink: 0;
  }

  main {
    width: 100%;
    padding: 30px;
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

  .content-outer-wrapper {
    position: relative;
    border: 8px solid var(--border-color-black);
    padding: 3px;
    width: 100%;
    height: 100%;
  }

  .content-outer-wrapper::before {
    content: '';
    position: absolute;
    background-color: var(--bg-color-white);
    opacity: 0.7;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .content-inner-wrapper {
    border: 2px solid var(--border-color-black);
    padding: 30px;
    width: 100%;
    height: 100%;
  }

  .mango .page-wrapper::before {
    background: url('$lib/assets/shrine.png') repeat;
    background-size: 30px;
    opacity: 0.5;
  }

  @media (max-width: 1660px) {
    .container {
      width: 1440px;
    }
  }
</style>
