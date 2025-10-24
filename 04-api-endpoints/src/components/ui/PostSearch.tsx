'use client';

import { fetchPostsBySearch } from '@/utils/api/posts';
import { FormEvent, useState, type FC, type ReactElement } from 'react';
import useSWR from 'swr';

export const PostSearch: FC = (): ReactElement => {
  const [query, setQuery] = useState('');
  const { mutate } = useSWR('posts');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posts = fetchPostsBySearch(query);
    mutate(posts);
  };

  return (
    <form action="#" className="flex gap-x-4" onSubmit={handleSubmit}>
      <input
        id="searchInput"
        name="searchInput"
        className="rounded-lg border px-1"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="h-8 cursor-pointer rounded-lg bg-blue-600 px-4 text-white transition-colors hover:bg-blue-800"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
