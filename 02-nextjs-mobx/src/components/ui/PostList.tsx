'use client';

import { useEffect, type FC, type ReactElement } from 'react';
import { observer } from 'mobx-react-lite';

import { postStore } from '@/stores/post.store';
import { PostItem } from './PostItem';

export const PostList: FC = observer((): ReactElement => {
  useEffect(() => {
    postStore.getAllPosts();
  }, []);

  if (postStore.isLoading) {
    return <h3 className="text-2xl font-bold">Loading...</h3>;
  }

  if (!postStore.posts.length) {
    return <h3 className="text-2xl font-bold">Posts not found!</h3>;
  }

  return (
    <ul className="list-disc">
      {postStore.posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
});
