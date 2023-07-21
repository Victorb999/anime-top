import { Anime, Daum, SearchParams } from "@/services/types";
import { create } from "zustand";

export type Store = {
  animeList: Daum[];
  searchParams: SearchParams;
  loading: boolean;
  error: boolean;
  setAnimeList: (animeList: Daum[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
  setSearchParams: (searchParams: SearchParams) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    animeList: [],
    searchParams: { limit: 10, page: 1 },
    loading: true,
    error: false,
    setAnimeList: (animeList: Daum[]) =>
      set((state: Store) => ({
        ...state,
        animeList,
      })),
    setLoading: (loading: boolean) =>
      set((state: Store) => ({
        ...state,
        loading,
      })),
    setError: (error: boolean) =>
      set((state: Store) => ({
        ...state,
        error,
      })),
    setSearchParams: (searchParams: SearchParams) =>
      set((state: Store) => ({
        ...state,
        searchParams,
      })),
  })
);
export default useStore;
