import { useState, useEffect } from "react"
import { getAnimeGenres } from "@/services/api"
import { Genre } from "@/services/types"
import useStore from "@/store/store"

export const SearchByGenres = () => {
  const { searchParams } = useStore()
  const [animeGenres, setAnimeGenres] = useState<Genre[]>([])
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])
  const [showGenres, setShowGenres] = useState<boolean>(false)

  useEffect(() => {
    const fetchAnimeGenres = async () => {
      const genres = await getAnimeGenres()
      setAnimeGenres(genres)
    }

    fetchAnimeGenres()
  }, [])

  const handleCheckboxChange = (genreId: number) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId))
    } else {
      setSelectedGenres([...selectedGenres, genreId])
    }
  }

  useEffect(() => {
    if (selectedGenres.length > 0) {
      useStore
        .getState()
        .setSearchParams({ ...searchParams, genres: selectedGenres.join(",") })
    } else {
      const searchParamsNew = searchParams
      delete searchParamsNew.genres
      useStore.getState().setSearchParams(searchParamsNew)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenres])

  return (
    <div className="flex flex-col max-w-2xl duration-200 justify-center items-center">
      <button
        onClick={() => setShowGenres(!showGenres)}
        className="bg-custom-secondary  p-2 rounded hover:brightness-50 w-[150px]"
      >
        {!showGenres ? "Filter per genres" : "Hide genres"}
      </button>
      <div>
        {showGenres && (
          <div className="grid gap-4 grid-cols-4 mt-2 bg-custom-secondary  rounded p-2">
            {animeGenres.map((genre) => (
              <div key={genre.mal_id} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id={genre.name}
                  onChange={() => handleCheckboxChange(genre.mal_id)}
                />
                <label htmlFor={genre.name}>{genre.name}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
