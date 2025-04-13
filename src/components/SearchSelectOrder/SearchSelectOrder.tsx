import useStore from "@/store/store"
export const SearchSelectOrder = () => {
  const { searchParams } = useStore()

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
      useStore.getState().setSearchParams({ ...searchParams, order_by: param })
    } else {
      const searchParamsNew = searchParams
      delete searchParamsNew.order_by
      useStore.getState().setSearchParams(searchParamsNew)
    }
  }

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
  ]

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
      className="rounded text-white bg-custom-secondary  border-none 
      outline-none h-[40px] m-0 p-2 duration-200 w-[150px]
       hover:bg-custom-secondary  active:bg-gray-800"
      defaultValue={searchParams.order_by ?? "none"}
    >
      <option value="none">Order by</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
