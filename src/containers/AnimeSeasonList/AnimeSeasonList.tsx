/* eslint-disable @next/next/no-img-element */
import { getSeasonNow } from "@/services/api"
import { AnimeList } from "@/components/AnimeList/AnimeList"

export const revalidate = 3600

export const AnimeSeasonList = async () => {
  const animeSeasonList = await getSeasonNow()

  return (
    <div
      className="flex flex-col w-full bg-custom-secondary p-4
    border-b border-[#302c33]"
    >
      <AnimeList
        animeList={animeSeasonList?.data}
        title={"Anime season list"}
      />
    </div>
  )
}
