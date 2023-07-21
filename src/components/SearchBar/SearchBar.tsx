"use client";
import { getAnimeSearch } from "@/services/api";
import useStore from "@/store/store";
import { SearchInputTerm } from "../SearchInputTerm/SearchInputTerm";
import { SearchResult } from "../SearchResult/SearchResult";
import { useState } from "react";
import { SearchSelectType } from "../SearchSelectType/SearchSelectType";
import { SearchNumberScore } from "../SearchNumberScore/SearchNumberScore";
import { SearchSelectRating } from "../SearchSelectRating/SearchSelectRating";
import { SearchSelectOrder } from "../SearchSelectOrder/SearchSelectOrder";
import { SearchSelectSort } from "../SearchSelectSort/SearchSelectSort";
import { SearchByGenres } from "../SearchByGenres/SearchByGenres";

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
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center justify-center gap-2 w-full flex-wrap">
        <SearchInputTerm />
        <SearchNumberScore />
        <SearchSelectType />
        <SearchSelectRating />
        <SearchSelectOrder />
        <SearchSelectSort />
        <button
          onClick={() => searchAnime()}
          className="flex justify-center items-center p-2 bg-gradient-to-r from-rose-700 to-pink-700
         text-white font-bold rounded-sm duration-200 hover:brightness-150 w-[120px]"
        >
          Buscar
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SearchByGenres />
      </div>
      <div className="flex flex-col items-center justify-center">
        <SearchResult searchAction={searchAction} />
      </div>
    </div>
  );
};
