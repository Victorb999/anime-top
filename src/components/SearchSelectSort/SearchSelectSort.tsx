import useStore from "@/store/store"
export const SearchSelectSort = () => {
  const { searchParams } = useStore()

  const setType = (param: "none" | "desc" | "asc") => {
    if (param !== "none") {
      useStore.getState().setSearchParams({ ...searchParams, sort: param })
    } else {
      const searchParamsNew = searchParams
      delete searchParamsNew.sort
      useStore.getState().setSearchParams(searchParamsNew)
    }
  }

  const options = ["desc", "asc"]

  return (
    <select
      onChange={(e) => setType(e.target.value as "none" | "desc" | "asc")}
      className="rounded text-white bg-custom-secondary  border-none 
      outline-none h-[40px] m-0 p-2 duration-200
       hover:bg-custom-secondary  active:bg-gray-800"
      defaultValue={searchParams.sort ?? "none"}
    >
      <option value="none">Sort by</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
