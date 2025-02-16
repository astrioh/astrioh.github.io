import { Themes } from "$lib/types";

export const prerender = true;

export async function load() {
  return {
    theme: Themes.Techno,
  }
}