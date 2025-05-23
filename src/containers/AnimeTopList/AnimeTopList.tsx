import { getAnimeTop } from "@/services/api"
import { AnimeList } from "@/components/AnimeList/AnimeList"
import { useEffect, useState } from "react"
import { Anime } from "@/services/types"

export const AnimeTopList = ({ filter }: { filter: string }) => {
  const [animeTopList, setAnimeTopList] = useState<Anime | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimeTop(filter)
      setAnimeTopList(data)
      setLoading(false)
    }
    fetchData()
  }, [filter])

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
