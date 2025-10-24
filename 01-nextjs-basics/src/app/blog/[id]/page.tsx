import { Metadata } from 'next';
import type { FC } from 'react';
import { Post } from '../types';

interface Props {
  params: {
    id: string;
  };
}

const getPostById = async (id: string) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60, // Время жизни кэша в секундах
      },
    });

    if (!res.ok) {
      throw new Error(`Unable to fetch post with id: ${id}!`);
    }

    return res.json();
  } catch (_error) {
    const error = _error as Error;
    throw new Error(error.message);
  }
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params;
  return {
    title: id,
  };
};

const PostPage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  const post: Post = await getPostById(id);

  return (
    <div className="container">
      <div className="flex flex-col gap-y-4 py-8">
        <h1 className="text-center text-4xl font-bold">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostPage;
