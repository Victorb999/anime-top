"use client"
import { useMemo, useState } from "react"
import { AnimeSeasonList } from "../AnimeSeasonList/AnimeSeasonList"
import { AnimeTopList } from "../AnimeTopList/AnimeTopList"

export const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(1)

  const categories = [
    {
      id: 1,
      title: "Anime season",
      component: <AnimeSeasonList />,
      active: true,
    },
    {
      id: 2,
      title: "Anime top popularity",
      component: <AnimeTopList filter="bypopularity" />,
      active: false,
    },
    {
      id: 3,
      title: "Anime top favorite",
      component: <AnimeTopList filter="favorite" />,
      active: false,
    },
    {
      id: 4,
      title: "Anime top upcoming",
      component: <AnimeTopList filter="upcoming" />,
      active: false,
    },
    {
      id: 5,
      title: "Anime top airing",
      component: <AnimeTopList filter="airing" />,
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
      className="flex flex-col  w-full 
    border-b border-[#302c33]"
    >
      <div className="flex w-full border-b border-[#302c33]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col 
            justify-center items-center relative
            p-4"
            style={
              category.id === activeTab
                ? {
                    color: "#fff",
                  }
                : { color: "#666" }
            }
          >
            <span
              className="text-lg cursor-pointer hover:text-rose-400"
              onClick={() => setActiveTab(category.id)}
            >
              {category.title}
            </span>
            {category.id === activeTab && (
              <div className="absolute bottom-1 h-2 w-10 bg-rose-600 rounded-full mt-2"></div>
            )}
          </div>
        ))}
      </div>
      <div className=" p-4">{renderActiveComponent}</div>
    </div>
  )
}
