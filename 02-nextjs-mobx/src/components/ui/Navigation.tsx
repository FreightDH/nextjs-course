'use client';

import type { FC, ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { NavLink } from '@/utils/types';

interface Props {
  navLinks: NavLink[];
}

export const Navigation: FC<Props> = ({ navLinks }): ReactElement => {
  const pathname = usePathname();

  return (
    <nav aria-label="Основная навигация">
      <ul className="flex items-center justify-center gap-x-6" role="menubar">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <li key={link.label} role="none">
              <Link href={link.href} className={`hover:underline ${isActive ? 'text-blue-400' : ''}`}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
