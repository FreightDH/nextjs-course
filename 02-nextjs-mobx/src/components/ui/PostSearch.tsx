'use client';

import { FormEvent, useState, type FC, type ReactElement } from 'react';
import { postStore } from '@/stores/post.store';

export const PostSearch: FC = (): ReactElement => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postStore.getPostsBySearch(query);
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
