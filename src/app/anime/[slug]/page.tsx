/* eslint-disable @next/next/no-img-element */
"use client";
import { Daum } from "@/services/types";
import { useEffect, useMemo } from "react";
import useStore from "../../../store/store";
import { redirect } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  const { animeList } = useStore();

  const animePage = useMemo(() => {
    return animeList.find(
      (anime: Daum) => anime.mal_id === parseInt(params.slug)
    );
  }, [animeList, params.slug]);

  useEffect(() => {
    animePage && useStore.getState().setAnimeSelected(animePage);
  }, [animePage]);

  if (!animePage) {
    redirect("/");
    return null;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.9)), url(${
          animePage.trailer.images.maximum_image_url ?? ""
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center p-4 gap-4">
        <div>
          <img
            src={animePage.images.webp.large_image_url}
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
          <p>{animePage.type}</p>
          <p>{animePage.genres.map((genres) => `${genres.name} `)}</p>
          <p>{animePage.duration}</p>
          <p>{animePage.episodes} episodes</p>
          <p className="font-bold">{animePage.score} ⭐</p>
          <p>Rank {animePage.rank}</p>
          <p>{animePage.themes.map((themes) => `${themes.name} `)}</p>
          <p className="font-bold">
            Studio ➡️ {animePage.studios.map((studio) => ` ${studio.name} `)}
          </p>

          <p>
            {animePage.broadcast.day} {animePage.broadcast.time}{" "}
            {animePage.broadcast.timezone}
          </p>
          <p>
            {animePage.aired.prop.from.year} ~ {animePage.aired.prop.to.year}
          </p>
          <span className="text-sm">{animePage.synopsis}</span>
          <Link
            className="flex justify-center items-center p-2 mt-2 bg-gradient-to-r from-sky-500 to-indigo-500
         text-white font-bold rounded-sm hover:bg-blue-600 w-[120px]"
            href="/"
          >
            ⬅️ Go back
          </Link>
        </div>
      </div>
      <div className="flex justify-center pb-12">
        {animePage.trailer.embed_url && (
          <iframe
            width="420"
            height="315"
            src={`${animePage.trailer.embed_url}&output=embed`}
          ></iframe>
        )}
      </div>
    </div>
  );
}
