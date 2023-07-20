import { Anime, Daum } from "@/services/types";
import { create } from "zustand";

export type Store = {
  animeList: Daum[];
  animeSelected: Daum | null;
  setAnimeList: (animeList: Daum[]) => void;
  setAnimeSelected: (animeSelected: Daum) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    animeList: [],
    animeSelected: null,
    setAnimeList: (animeList: Daum[]) =>
      set((state: Store) => ({
        ...state,
        animeList,
      })),
    setAnimeSelected: (animeSelected: Daum) =>
      set((state: Store) => ({
        ...state,
        animeSelected,
      })),
  })
);
export default useStore;
