import type { FC, ReactElement } from 'react';
import Link from 'next/link';

export const Header: FC = (): ReactElement => {
  return (
    <header className="bg-(--secondary) py-6 text-white">
      <div className="container">
        <div className="">
          <nav aria-label="Основная навигация">
            <ul className="flex items-center justify-center gap-x-6" role="menubar">
              <li role="none">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li role="none">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li role="none">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
