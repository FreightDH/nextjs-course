import type { FC, ReactElement } from 'react';
import { Metadata } from 'next';

import { PostSearch } from '@/components/ui/PostSearch';
import { PostList } from '@/components/ui/PostList';

export const metadata: Metadata = {
  title: 'Blog | NextJS App',
};

const BlogPage: FC = (): ReactElement => {
  return (
    <div className="container">
      <div className="flex flex-col gap-y-4 py-8">
        <h1 className="text-center text-4xl font-bold">Blog Page</h1>
        <PostSearch />
        <PostList />
      </div>
    </div>
  );
};

export default BlogPage;
