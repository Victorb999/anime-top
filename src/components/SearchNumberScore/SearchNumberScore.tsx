import useStore from "@/store/store"
export const SearchNumberScore = () => {
  const { searchParams } = useStore()

  const setMinScore = (number: number) => {
    useStore.getState().setSearchParams({ ...searchParams, min_score: number })
  }
  const setMaxScore = (number: number) => {
    useStore.getState().setSearchParams({ ...searchParams, max_score: number })
  }

  return (
    <div className="flex gap-2">
      <input
        type="number"
        onChange={(e) => setMinScore(parseInt(e.target.value))}
        className="rounded text-white bg-custom-secondary  border-none 
      outline-none h-[40px] m-0 p-2 duration-200 w-[120px]
       hover:bg-custom-secondary  active:bg-gray-800"
        defaultValue={searchParams.min_score}
        placeholder="Min score"
        min="0"
        max="10"
        step="0.2"
      />
      <input
        type="number"
        onChange={(e) => setMaxScore(parseInt(e.target.value))}
        className="rounded text-white bg-custom-secondary  border-none 
      outline-none h-[40px] m-0 p-2 duration-200 w-[120px]
       hover:bg-custom-secondary  active:bg-gray-800"
        defaultValue={searchParams.max_score}
        placeholder="Max score"
        min="0"
        max="10"
        step="0.2"
      />
    </div>
  )
}
