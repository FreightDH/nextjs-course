'use client';

import type { FC, ReactElement } from 'react';

interface Props {
  error: Error;
}

const PostsErrorPage: FC<Props> = ({ error }): ReactElement => {
  return (
    <div className="py-8">
      <h1 className="text-center text-4xl font-bold">Oops! {error.message}</h1>
    </div>
  );
};

export default PostsErrorPage;
