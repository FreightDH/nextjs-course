import type { FC, ReactElement } from 'react';

const PostsLoader: FC = (): ReactElement => {
  return (
    <div className="py-8">
      <h1 className="text-center text-4xl font-bold">Loading...</h1>
    </div>
  );
};

export default PostsLoader;
