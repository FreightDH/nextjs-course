import type { FC, ReactElement } from 'react';
import { Navigation } from '../ui/Navigation';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export const Header: FC = (): ReactElement => {
  return (
    <header className="bg-(--secondary) py-6 text-white">
      <div className="container">
        <Navigation navLinks={navLinks} />
      </div>
    </header>
  );
};
