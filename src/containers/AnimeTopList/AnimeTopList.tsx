import { getAnimeTop } from "@/services/api"
import { AnimeList } from "@/components/AnimeList/AnimeList"
import { useEffect, useState } from "react"
import { Anime } from "@/services/types"

export const AnimeTopList = () => {
  const [animeTopList, setAnimeTopList] = useState<Anime | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimeTop()
      setAnimeTopList(data)
      setLoading(false)
      console.log(data)
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center pulse">
        Loading...
      </div>
    )
  }

  if (!animeTopList) {
    return <div>No data available</div>
  }

  return (
    <div>
      <AnimeList animeList={animeTopList?.data} />
    </div>
  )
}
