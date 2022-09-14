export interface NavdataProps {
    id: number;
    title: string;
    type: 'link' | 'button';
    href?: string;
  }

  export const navdata: Array<NavdataProps> = [
    {
        id: 1,
        title: 'HOME',
        type: 'link',
        href: '/',
      },
      {
        id: 2,
        title: 'ABOUT',
        type: 'link',
        href: '/about',
      },
      {
        id: 3,
        title: 'GALLERY',
        type: 'link',
        href: '/gallery',
      },
      {
        id: 4,
        title: 'SHOP',
        type: 'link',
        href: '/shop',
      },
      {
        id: 5,
        title: 'CONTACT',
        type: 'link',
        href: '/contact',
      },
  ];