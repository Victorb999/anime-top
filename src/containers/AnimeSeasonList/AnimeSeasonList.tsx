import { getSeasonNow } from "@/services/api"
import { AnimeList } from "@/components/AnimeList/AnimeList"
import { Anime } from "@/services/types"
import { useState, useEffect } from "react"

export const AnimeSeasonList = () => {
  const [animeSeasonList, setAnimeSeasonList] = useState<Anime | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSeasonNow()
      setAnimeSeasonList(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center">Loading...</div>
    )
  }

  if (!animeSeasonList) {
    return <div>No data available</div>
  }
  return (
    <div>
      <AnimeList animeList={animeSeasonList?.data} />
    </div>
  )
}
