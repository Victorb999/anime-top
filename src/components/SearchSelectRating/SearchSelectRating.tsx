import useStore from "@/store/store";
export const SearchSelectRating = () => {
  const { searchParams } = useStore();

  const setType = (param: "all" | "g" | "pg" | "pg13" | "r17" | "r" | "rx") => {
    if (param !== "all") {
      useStore.getState().setSearchParams({ ...searchParams, rating: param });
    } else {
      const searchParamsNew = searchParams;
      delete searchParamsNew.rating;
      useStore.getState().setSearchParams(searchParamsNew);
    }
  };

  const options: { [key: string]: string } = {
    g: "All Ages",
    pg: "Children",
    pg13: "Teens 13 or older",
    r17: "17+ (violence & profanity)",
    r: "Mild Nudity",
    rx: "Hentai",
  };

  const optionsArray = Object.keys(options).map((key) => ({
    value: key,
    description: options[key as keyof typeof options],
  }));

  return (
    <select
      onChange={(e) =>
        setType(
          e.target.value as "all" | "g" | "pg" | "pg13" | "r17" | "r" | "rx"
        )
      }
      className="rounded text-white bg-gray-900 border-none 
      outline-none h-[40px] m-0 p-2 duration-200 w-[150px]
       hover:bg-gray-900 active:bg-gray-800"
      defaultValue={searchParams.rating ?? "all"}
    >
      <option value="all">Select rating</option>
      {optionsArray.map(({ value, description }) => (
        <option key={value} value={value}>
          {description}
        </option>
      ))}
    </select>
  );
};
