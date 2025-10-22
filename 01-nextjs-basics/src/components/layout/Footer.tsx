import type { ReactElement } from 'react';

export const Footer = (): ReactElement => {
  return (
    <footer className="py-6">
      <div className="container">
        <p className="text-center">
          <a className="hover:underline" href="https://github.com/FreightDH" target="blank" rel="noopener noreferrer">
            FreightDH
          </a>{' '}
          © 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
