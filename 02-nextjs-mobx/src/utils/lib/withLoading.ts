import { runInAction } from 'mobx';

export async function withLoading<T>(store: { isLoading: boolean }, callback: () => Promise<T>) {
  try {
    runInAction(() => (store.isLoading = true));
    return await callback();
  } finally {
    runInAction(() => (store.isLoading = false));
  }
}
