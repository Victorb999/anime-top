import { AnimeSeasonList } from "@/components/AnimeSeasonList/AnimeSeasonList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-16 py-8">
      <AnimeSeasonList />
    </main>
  );
}
