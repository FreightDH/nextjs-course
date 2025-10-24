export const fetchAllPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Unable to fetch posts!');
  }

  return res.json();
};

export const fetchPostById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error(`Unable to fetch post with id: ${id}!`);
  }

  return res.json();
};

export const fetchPostsBySearch = async (query: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`);

  if (!res.ok) {
    throw new Error(`Posts not found!`);
  }

  return res.json();
};
