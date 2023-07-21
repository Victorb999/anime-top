import { AnimeList } from "../AnimeList/AnimeList";
import useStore from "@/store/store";
export const SearchResult = () => {
  const { loading, error, animeList } = useStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ops ocorreu um erro.</div>;
  }

  if (!loading && animeList.length === 0) {
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
