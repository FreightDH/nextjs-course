import type { FC, ReactElement } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | NextJS App',
};

const AboutPage: FC = (): ReactElement => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
