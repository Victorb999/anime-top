import { AnimeSeasonList } from "@/containers/AnimeSeasonList/AnimeSeasonList"
import { SearchBar } from "@/containers/SearchBar/SearchBar"

export default function Home() {
  return (
    <main
      className="flex flex-col items-center gap-4
      justify-center w-full pb-4"
    >
      <AnimeSeasonList />
      <SearchBar />
    </main>
  )
}
