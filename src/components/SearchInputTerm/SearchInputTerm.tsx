import useStore from "@/store/store";
export const SearchInputTerm = () => {
  const { searchParams } = useStore();

  const setTerm = (word: string) => {
    useStore.getState().setSearchParams({ ...searchParams, q: word });
  };

  return (
    <input
      type="text"
      onChange={(e) => setTerm(e.target.value)}
      className="rounded text-white bg-gray-900 border-none 
      outline-none h-[40px] m-0 p-2 duration-200
       hover:bg-gray-900 active:bg-gray-800"
      defaultValue={searchParams.q}
      placeholder="Search anime by name..."
    />
  );
};
