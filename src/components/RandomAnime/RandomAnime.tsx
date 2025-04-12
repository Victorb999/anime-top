"use client"
import { getAnimeRandom } from "@/services/api"
import { Daum } from "@/services/types"
import { useEffect, useState } from "react"

export const RandomAnime = () => {
  const [randomAnime, setRandomAnime] = useState<Daum | null>(null)
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
  }

  useEffect(() => {
    if (randomAnime) {
      window.location.href = `/anime/${randomAnime?.mal_id}`
    }
  }, [randomAnime])

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
