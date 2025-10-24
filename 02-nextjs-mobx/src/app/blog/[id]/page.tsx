'use client';

import { use, useEffect, type FC } from 'react';
import { observer } from 'mobx-react-lite';

import { postStore } from '@/stores/post.store';

type Params = Promise<{ id: string }>;

interface Props {
  params: Params;
}

const PostPage: FC<Props> = observer(({ params }) => {
  const { id } = use(params);

  useEffect(() => {
    postStore.getPostById(id);
  }, [id]);

  return (
    <div className="container">
      <div className="py-8">
        {postStore.isLoading ? (
          <h1 className="text-center text-3xl font-bold">Loading...</h1>
        ) : (
          <div className="flex flex-col gap-y-4">
            <h1 className="text-center text-4xl font-bold">{postStore.post.title}</h1>
            <p>{postStore.post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default PostPage;
