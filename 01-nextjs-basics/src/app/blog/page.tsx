import type { FC } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Post } from './types';

const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: {
        revalidate: 60, // Время жизни данных в кэше в секундах
      },
    });

    if (!res.ok) {
      throw new Error('Unable to fetch posts!');
    }

    return res.json();
  } catch (_error) {
    const error = _error as Error;
    throw new Error(error.message);
  }
};

export const metadata: Metadata = {
  title: 'Blog | NextJS App',
};

const BlogPage: FC = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div className="container">
      <div className="py-8">
        <h1 className="mb-4 text-center text-4xl font-bold">Blog Page</h1>

        <ul className="list-disc">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPage;
