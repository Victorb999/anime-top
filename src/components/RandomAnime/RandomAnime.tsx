"use client"
import { getAnimeRandom } from "@/services/api"
import { useState } from "react"

export const RandomAnime = () => {
  const [randomAnime, setRandomAnime] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchRandomAnime = async () => {
    setLoading(true)
    const response = await getAnimeRandom()
    setRandomAnime(response)
  }

  const handleClick = () => {
    fetchRandomAnime()
    setLoading(false)
    if (!randomAnime) return
    window.location.href = `/anime/${randomAnime?.mal_id}`
  }

  return (
    <button
      className="flex justify-center items-center p-2 mt-2 bg-gradient-to-r from-rose-700 to-pink-700
         text-white font-bold rounded-sm duration-200 
         hover:brightness-150 "
      onClick={handleClick}
    >
      {loading ? (
        <div className="animate-pulse bg-gray-300 h-10 w-40 rounded-md"></div>
      ) : (
        <span className="text-white text-lg font-bold">Random Anime</span>
      )}
    </button>
  )
}
