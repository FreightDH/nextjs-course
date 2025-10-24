import { makeAutoObservable, runInAction } from 'mobx';

import { Post } from '@/utils/types';
import { fetchAllPosts, fetchPostById, fetchPostsBySearch } from '@/utils/api/posts';
import { withLoading } from '@/utils/lib/withLoading';

class PostStore {
  posts: Post[] = [];
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getAllPosts() {
    const data = await withLoading(this, fetchAllPosts);
    runInAction(() => (this.posts = data));
  }

  async getPostById(id: string) {
    const data = await withLoading(this, () => fetchPostById(id));
    runInAction(() => (this.post = data));
  }

  async getPostsBySearch(query: string) {
    const data = await withLoading(this, () => fetchPostsBySearch(query));
    runInAction(() => (this.posts = data));
  }
}

export const postStore = new PostStore();
