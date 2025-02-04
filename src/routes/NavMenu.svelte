<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import { MENU_LINKS } from '$lib/constants';
</script>

<nav class="nav-menu">
	<ul class="menu-list">
		{#each MENU_LINKS as link}
			<li>
				<Link href={link.href}>{link.text}</Link>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav-menu {
		background-image: url('$lib/assets/mango-menu.png');
		padding: 80px 128px 120px 70px;
		width: 491px;
		height: 647px;
	}

	.menu-list {
		list-style: none;
	}

	:global(.manga) .menu-list {
		list-style: armenian;
	}
</style>
