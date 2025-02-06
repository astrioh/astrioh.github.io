type MenuLink = {
  text: string;
  href: string;
  children?: MenuLink[];
};

export const PAGE_PATHS = {
  MAIN: '/',
  PROJECTS: '/',
  PROJECTS_PROGRAMS: '/',
  MANGA: '/mango',
  VIDEOGAMES: '/',
};

export const MENU_LINKS: MenuLink[] = [
  {
    text: 'Главная',
    href: PAGE_PATHS.MAIN,
  },
  {
    text: 'Проекты',
    href: PAGE_PATHS.PROJECTS,
    children: [
      {
        text: 'Программы',
        href: PAGE_PATHS.PROJECTS_PROGRAMS,
      },
    ],
  },
  {
    text: 'Манга',
    href: PAGE_PATHS.MANGA,
  },
  {
    text: 'Видеоигры',
    href: PAGE_PATHS.VIDEOGAMES,
  },
];