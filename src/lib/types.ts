export type Categories = 'manga' | 'books';

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  coverImage: string;
  coverWidth: number;
  coverHeight: number;
  excerpt: string;
};

export enum Themes {
  Mango = 'mango',
  Techno = 'techno',
}