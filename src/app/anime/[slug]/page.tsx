/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { getAnimeById } from "@/services/api"
import { AnimeTrailer } from "@/components/AnimeTrailer/AnimeTrailer"

interface PageProps {
  params: { slug: string }
}

export default async function Page({ params }: Awaited<PageProps>) {
  const animePage = await getAnimeById(parseInt(params.slug))

  const englishTitle = animePage.titles.find(
    (title) => title.type === "English"
  )

  return (
    <div
      className={`flex 
        flex-col
        sm:flex-row
        gap-4
        h-[90dvh]
        items-start 
        justify-around
        `}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.9)), url(${
          animePage?.trailer?.images?.maximum_image_url ?? ""
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="flex 
      flex-col
      sm:flex-row
      justify-center items-center p-4 gap-4"
      >
        <div>
          <img
            src={animePage.images?.webp.large_image_url}
            alt={animePage.title}
            className="max-h-[500px]"
          />
        </div>
        <div className="flex flex-col p-2 max-w-[500px] ">
          <h1
            title={animePage.title}
            className="cursor-default font-bold text-xl"
          >
            {animePage.title}
          </h1>
          <h1
            title={englishTitle?.title}
            className="cursor-default font-bold text-xl text-red-800"
          >
            {englishTitle?.title}
          </h1>

          <p>{animePage.type}</p>
          <p>{animePage.genres?.map((genres) => `${genres.name} `)}</p>
          <p>{animePage.duration}</p>
          <p>{animePage.episodes} episodes</p>
          <p className="font-bold">{animePage.score} ⭐</p>
          <p>Rank {animePage.rank}</p>
          <p>{animePage.themes?.map((themes) => `${themes.name} `)}</p>
          <p className="font-bold">
            Studio ➡️ {animePage.studios?.map((studio) => ` ${studio.name} `)}
          </p>

          <p>
            {animePage.broadcast?.day} {animePage.broadcast?.time}{" "}
            {animePage.broadcast?.timezone}
          </p>
          <p>
            {animePage.aired?.prop.from.year} ~ {animePage.aired?.prop.to.year}
          </p>
          <span className="text-sm">{animePage.synopsis}</span>
          <Link
            className="flex justify-center items-center p-2 mt-2 bg-gradient-to-r from-rose-700 to-pink-700
         text-white font-bold rounded-sm duration-200 hover:brightness-150 w-[120px]"
            href="/"
          >
            ⬅️ Go back
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4 gap-4">
        {animePage.trailer?.embed_url && (
          <>
            <h1 className="text-2xl font-bold">Trailer</h1>
            <AnimeTrailer trailer={animePage.trailer.embed_url} />
          </>
        )}
      </div>
    </div>
  )
}
