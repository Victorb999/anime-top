/* eslint-disable @next/next/no-img-element */
import { Daum } from "@/services/types"
import Link from "next/link"

interface AnimeListProps {
  animeList: Daum[]
  title: string
}
export const AnimeList = ({ animeList, title }: AnimeListProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold ml-10">{title}</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {animeList?.map((anime) => {
          return (
            <Link
              key={anime.mal_id}
              href={`/anime/${anime.mal_id}`}
              className="flex items-center 
              justify-between
              w-[200px] 
               bg-gray-900 duration-200 hover:brightness-50"
            >
              <img
                src={anime.images.webp.image_url}
                alt={anime.title}
                className="max-w-[80px]"
              />
              <div className="flex flex-col items-center p-2">
                <span title={anime.title} className="cursor-default">
                  {anime.title.substring(0, 20)}
                  {anime.title.length > 20 ? "..." : ""}
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
