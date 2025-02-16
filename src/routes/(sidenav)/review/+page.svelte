<script lang="ts">
  import type { PageData } from './$types';
  import japaneseFishCat from '$lib/assets/japanese-fish-cat.png';

  let { data }: { data: PageData } = $props();
</script>

<div class="review">
  <h1>"Дневник читателя"</h1>
  <div class="posts">
    {#each data.posts as post}
      <div>
        <img
          src={post.coverImage}
          alt={post.title}
          width={post.coverWidth}
          height={post.coverHeight}
        />
      </div>
    {/each}
  </div>
  <img class="japanese-fish-cat" src={japaneseFishCat} alt="Cat catching fish" />
</div>

<style>
  .review {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .japanese-fish-cat {
    position: absolute;
    right: -100px;
    bottom: -100px;
    width: 300px;
  }
</style>
