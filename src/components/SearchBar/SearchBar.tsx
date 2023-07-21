"use client";
import { getAnimeSearch } from "@/services/api";
import useStore from "@/store/store";
import { SearchInputTerm } from "../SearchInputTerm/SearchInputTerm";
import { SearchResult } from "../SearchResult/SearchResult";
import { useState } from "react";

export const SearchBar = () => {
  const { searchParams } = useStore();
  const [searchAction, setSearchAction] = useState<boolean>(false);

  const searchAnime = async () => {
    useStore.getState().setLoading(true);
    const animeList = await getAnimeSearch(searchParams);
    if (!animeList) useStore.getState().setError(true);
    useStore.getState().setLoading(false);
    useStore.getState().setAnimeList(animeList);
    setSearchAction(true);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {JSON.stringify(searchParams)}
      <div className="flex items-center p-4 gap-2">
        <SearchInputTerm />
        <button
          onClick={() => searchAnime()}
          className="flex justify-center items-center p-2 mt-2 bg-gradient-to-r from-rose-700 to-pink-700
         text-white font-bold rounded-sm duration-200 hover:brightness-150 w-[120px]"
        >
          Buscar
        </button>
      </div>
      <SearchResult searchAction={searchAction} />
    </div>
  );
};
