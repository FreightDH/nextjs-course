'use client';

import { type FC, type ReactElement } from 'react';
import useSWR from 'swr';

import { fetchAllPosts } from '@/utils/api/posts';
import { PostItem } from './PostItem';
import { Post } from '@/utils/types';

export const PostList: FC = (): ReactElement => {
  const { data: posts, isLoading } = useSWR<Post[]>('posts', fetchAllPosts);

  if (isLoading) {
    return <h3 className="text-2xl font-bold">Loading...</h3>;
  }

  if (!posts || !posts.length) {
    return <h3 className="text-2xl font-bold">Posts not found!</h3>;
  }

  return (
    <ul className="list-disc">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
