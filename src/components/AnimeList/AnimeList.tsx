/* eslint-disable @next/next/no-img-element */
import { Daum } from "@/services/types"
import Link from "next/link"

interface AnimeListProps {
  animeList: Daum[]
}
export const AnimeList = ({ animeList }: AnimeListProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-4 justify-center">
        {animeList?.map((anime) => {
          return (
            <Link
              key={anime.mal_id}
              href={`/anime/${anime.mal_id}`}
              className="flex items-center 
              justify-start
              gap-2
              w-[200px]
              bg-gray-900 duration-200 hover:brightness-50"
            >
              <img
                src={anime.images.webp.image_url}
                alt={anime.title}
                className="max-w-[80px]"
              />
              <div className="flex flex-col items-start">
                <span title={anime.title} className="cursor-default text-sm">
                  {anime.title.substring(0, 38)}
                  {anime.title.length > 38 ? "..." : ""}
                </span>
                <p className="font-bold">{anime.score} ⭐</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
