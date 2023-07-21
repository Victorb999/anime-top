/* eslint-disable @next/next/no-img-element */
import { getSeasonNow } from "@/services/api";
import { AnimeList } from "@/components/AnimeList/AnimeList";

export const AnimeSeasonList = async () => {
  const animeSeasonList = await getSeasonNow();

  return (
    <AnimeList animeList={animeSeasonList.data} title={"Anime season list"} />
  );
};
