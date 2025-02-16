<script>
  import Link from '$lib/components/Link.svelte';
  import { PAGE_PATHS } from '$lib/constants';

  let { children } = $props();
</script>

<div class="fullscreen-wrapper fullscreen-layout">
  <nav class="top-menu">
    <Link href={PAGE_PATHS.MAIN}>Домой</Link>
  </nav>
  <div class="content">
    {@render children()}
  </div>
</div>

<style>
  .fullscreen-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .fullscreen-layout {
    font-size: 24px;
  }

  .top-menu {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 60px;
    margin: 0 auto;
    padding-top: 4px;

    background-color: rgb(8, 66, 8);
    border: 3px solid gold;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .top-menu::after {
    content: '';
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    width: 125px;
    height: 40px;
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 70"><path d="M5 5 Q30 50, 70 40 T130 40 T190 40 Q220 50, 245 5" stroke="gold" stroke-width="5" fill="none"/><path d="M10 0 L240 0" stroke="gold" stroke-width="5"/><circle cx="30" cy="20" r="8" fill="gold"/><circle cx="220" cy="20" r="8" fill="gold"/><circle cx="125" cy="30" r="10" fill="gold"/><path d="M60 10 Q125 60, 190 10" stroke="gold" stroke-width="4" fill="none"/></svg>')
      no-repeat center;
    background-color: rgb(8, 66, 8);
    background-size: contain;
  }

  .top-menu :global(.link) {
    color: gold;
  }

  .content {
    padding-top: 50px;
    width: 100%;
    height: 100%;
  }

  :global(.art) .fullscreen-wrapper {
    background: url('$lib/assets/white-wall.jpg');
    background-repeat: round;
    background-size: 250px;
  }
</style>
