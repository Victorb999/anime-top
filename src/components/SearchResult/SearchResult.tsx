import { AnimeList } from "../AnimeList/AnimeList";
import useStore from "@/store/store";

interface SearchResultProps {
  searchAction: boolean;
}

export const SearchResult = ({ searchAction }: SearchResultProps) => {
  const { loading, error, animeList } = useStore();

  if (!searchAction) return <></>;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ops ocorreu um erro.</div>;
  }

  if (searchAction && animeList.length === 0) {
    return (
      <div>
        Não encontramos nenhum anime com esse filtro de busca. Tente outro
        filtro
      </div>
    );
  }

  return (
    <div>
      <AnimeList animeList={animeList} title={"Search results"} />
    </div>
  );
};
