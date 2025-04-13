import { AnimeList } from "../AnimeList/AnimeList"
import useStore from "@/store/store"

interface SearchResultProps {
  searchAction: boolean
}

export const SearchResult = ({ searchAction }: SearchResultProps) => {
  const { loading, error, animeList } = useStore()

  if (!searchAction && animeList.length === 0) return <></>

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Ops ocorreu um erro.</div>
  }

  if (searchAction && animeList.length === 0) {
    return (
      <div>
        Não encontramos nenhum anime com esse filtro de busca. Tente outro
        filtro
      </div>
    )
  }

  return (
    <div
      className="bg-custom-secondary p-4
      border-b border-[#302c33]"
    >
      <h1 className="text-2xl font-bold ml-10">Search results</h1>
      <AnimeList animeList={animeList} />
    </div>
  )
}
