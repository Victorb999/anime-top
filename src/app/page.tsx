import { AnimeSeasonList } from "@/components/AnimeSeasonList/AnimeSeasonList";
import { SearchBar } from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-16 py-8">
      <SearchBar />
      <AnimeSeasonList />
    </main>
  );
}
