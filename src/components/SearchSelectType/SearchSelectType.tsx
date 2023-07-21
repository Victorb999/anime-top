import useStore from "@/store/store";
export const SearchSelectType = () => {
  const { searchParams } = useStore();

  const setType = (
    param: "all" | "tv" | "movie" | "ova" | "special" | "ona" | "music"
  ) => {
    if (param !== "all") {
      useStore.getState().setSearchParams({ ...searchParams, type: param });
    } else {
      const searchParamsNew = searchParams;
      delete searchParamsNew.type;
      useStore.getState().setSearchParams(searchParamsNew);
    }
  };

  const options = ["tv", "movie", "ova", "special", "ona", "music"];

  return (
    <select
      onChange={(e) =>
        setType(
          e.target.value as
            | "all"
            | "tv"
            | "movie"
            | "ova"
            | "special"
            | "ona"
            | "music"
        )
      }
      className="rounded text-white bg-gray-900 border-none 
      outline-none h-[40px] m-0 p-2 duration-200
       hover:bg-gray-900 active:bg-gray-800"
      defaultValue={searchParams.type ?? "all"}
    >
      <option value="all">Select type</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
