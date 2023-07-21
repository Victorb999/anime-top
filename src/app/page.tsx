import { AnimeSeasonList } from "@/components/AnimeSeasonList/AnimeSeasonList";
import { SearchBar } from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center 
      justify-center px-4 py-8 lg:px-8 xl:px-12 w-full"
    >
      <SearchBar />
      <AnimeSeasonList />
    </main>
  );
}
