import { type FC } from 'react';
import { fetchPostById } from '@/utils/api/posts';

export const generateMetadata = async ({ params }: PageProps<'/blog/[id]'>) => {
  const { id } = await params;
  const post = await fetchPostById(id);

  return {
    title: post.title,
  };
};

const PostPage: FC<PageProps<'/blog/[id]'>> = async ({ params }) => {
  const { id } = await params;
  const post = await fetchPostById(id);

  return (
    <div className="container">
      <div className="py-8">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-center text-4xl font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
