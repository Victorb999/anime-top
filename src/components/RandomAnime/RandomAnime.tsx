"use client"
import { getAnimeRandom } from "@/services/api"
import { useState } from "react"

export const RandomAnime = () => {
  const [randomAnime, setRandomAnime] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchRandomAnime = async () => {
    try {
      const response = await getAnimeRandom()
      setRandomAnime(response)
    } catch (error) {
      console.error("Error fetching random anime:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleClick = async () => {
    setLoading(true)
    await fetchRandomAnime()
    if (!randomAnime) return
    window.location.href = `/anime/${randomAnime?.mal_id}`
  }

  return (
    <button
      className="flex justify-center items-center p-2 bg-gradient-to-r from-rose-700 to-pink-700
         text-white font-bold rounded-sm duration-200 
         hover:brightness-150 "
      onClick={handleClick}
    >
      {loading ? (
        <div className="animate-pulse pulse rounded-md text-black">
          <span className="text-transparent">Loading...</span>
        </div>
      ) : (
        <span className="text-white text-md font-bold">Random Anime</span>
      )}
    </button>
  )
}
