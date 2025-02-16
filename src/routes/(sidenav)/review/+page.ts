import { Themes, type Post } from "$lib/types";

export const prerender = true;

export async function load(event) {
  const res = await event.fetch('/api/posts');
  const posts: Post[] = await res.json();

  return {
    posts,
    theme: Themes.Mango,
  }
}