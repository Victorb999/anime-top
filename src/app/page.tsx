import { CategoryTabs } from "@/containers/CategoryTabs/CategoryTabs"
import { SearchBar } from "@/containers/SearchBar/SearchBar"

export default function Home() {
  return (
    <main
      className="flex flex-col items-center
      justify-center w-full pb-4"
    >
      <CategoryTabs />
      <SearchBar />
    </main>
  )
}
