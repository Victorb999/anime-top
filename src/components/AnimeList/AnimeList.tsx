/* eslint-disable @next/next/no-img-element */
import { Daum } from "@/services/types";
import Link from "next/link";

interface AnimeListProps {
  animeList: Daum[];
  title: string;
}
export const AnimeList = ({ animeList, title }: AnimeListProps) => {
  return (
    <div className="flex flex-col mb-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      <div className="flex flex-wrap gap-4">
        {animeList.map((anime) => {
          return (
            <Link
              key={anime.mal_id}
              href={`/anime/${anime.mal_id}`}
              className="flex flex-col items-center 
              justify-between max-w-[150px] bg-gray-900 duration-200 hover:brightness-50"
            >
              <div className="flex flex-col items-center p-2">
                <span title={anime.title} className="cursor-default">
                  {anime.title.substring(0, 20)}
                  {anime.title.length > 20 ? "..." : ""}
                </span>
              </div>
              <img src={anime.images.webp.image_url} alt={anime.title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
