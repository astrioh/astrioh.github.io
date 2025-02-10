<script lang="ts">
  import Link from '$lib/components/Link.svelte';
  import { MENU_LINKS } from '$lib/constants';

  export let className = '';
</script>

<nav class={`nav-menu ${className}`}>
  <ul class="menu-list">
    {#each MENU_LINKS as link}
      <li class="menu-list-item">
        <Link href={link.href}>{link.text}</Link>
        {#if link.children?.length}
          <ul class="menu-list menu-list-children">
            {#each link.children as childLink}
              <li class="menu-list-item">
                <Link href={childLink.href}>{childLink.text}</Link>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .nav-menu {
    padding: 80px 128px 120px 90px;
    width: 491px;
    height: 647px;
  }

  :global(.mango) .nav-menu {
    background-image: url('$lib/assets/mango-menu.png');
  }

  .menu-list {
    width: 100%;
    list-style: none;
  }

  .menu-list-children {
    margin-left: 12px;
  }

  .menu-list-item {
    margin-top: 8px;
    font-size: 22px;
  }

  :global(.manga) .menu-list {
    list-style: armenian;
  }
</style>
