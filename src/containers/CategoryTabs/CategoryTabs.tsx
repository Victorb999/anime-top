"use client"
import { useMemo, useState } from "react"
import { AnimeSeasonList } from "../AnimeSeasonList/AnimeSeasonList"
import { AnimeTopList } from "../AnimeTopList/AnimeTopList"

export const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(1)

  const categories = [
    {
      id: 1,
      title: "Anime season list",
      component: <AnimeSeasonList />,
      active: true,
    },
    {
      id: 2,
      title: "Anime top list",
      component: <AnimeTopList />,
      active: false,
    },
  ]

  const renderActiveComponent = useMemo(() => {
    const activeCategory = categories.find(
      (category) => category.id === activeTab
    )
    return activeCategory?.component
  }, [activeTab])

  return (
    <div
      className="flex flex-col bg-custom-secondary w-full 
    border-b border-[#302c33] pb-2 gap-4"
    >
      <div className="flex bg-black w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex p-4 rounded-t-lg 
           "
            style={
              category.id === activeTab
                ? {
                    color: "#fff",
                    backgroundColor: "rgb(var(--secondary-black))",
                  }
                : { color: "#999", backgroundColor: "#000" }
            }
          >
            <span
              className="text-lg font-bold cursor-pointer hover:text-rose-400"
              onClick={() => setActiveTab(category.id)}
            >
              {category.title}
            </span>
          </div>
        ))}
      </div>
      {renderActiveComponent}
    </div>
  )
}
