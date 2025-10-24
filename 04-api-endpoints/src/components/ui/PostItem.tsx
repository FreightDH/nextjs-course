import type { FC, ReactElement } from 'react';
import Link from 'next/link';

import { Post } from '@/utils/types';

interface Props {
  post: Post;
}

export const PostItem: FC<Props> = ({ post }): ReactElement => {
  return (
    <li key={post.id}>
      <Link href={`/blog/${post.id}`} className="hover:underline">
        {post.title}
      </Link>
    </li>
  );
};
