import useStore from "@/store/store";
export const SearchSelectOrder = () => {
  const { searchParams } = useStore();

  const setType = (
    param:
      | "none"
      | "title"
      | "type"
      | "rating"
      | "start_date"
      | "end_date"
      | "episodes"
      | "score"
      | "scored_by"
      | "rank"
      | "popularity"
      | "members"
      | "favorites"
  ) => {
    if (param !== "none") {
      useStore.getState().setSearchParams({ ...searchParams, order_by: param });
    } else {
      const searchParamsNew = searchParams;
      delete searchParamsNew.order_by;
      useStore.getState().setSearchParams(searchParamsNew);
    }
  };

  const options = [
    "title",
    "type",
    "rating",
    "start_date",
    "end_date",
    "episodes",
    "score",
    "scored_by",
    "rank",
    "popularity",
    "members",
    "favorites",
  ];

  return (
    <select
      onChange={(e) =>
        setType(
          e.target.value as
            | "none"
            | "title"
            | "type"
            | "rating"
            | "start_date"
            | "end_date"
            | "episodes"
            | "score"
            | "scored_by"
            | "rank"
            | "popularity"
            | "members"
            | "favorites"
        )
      }
      className="rounded text-white bg-gray-900 border-none 
      outline-none h-[40px] m-0 p-2 duration-200 w-[150px]
       hover:bg-gray-900 active:bg-gray-800"
    >
      <option value="none" selected>
        Select order
      </option>
      {options.map((option) => (
        <option
          key={option}
          value={option}
          selected={option === searchParams.order_by}
        >
          {option}
        </option>
      ))}
    </select>
  );
};
