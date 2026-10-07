'use client'

import { cn } from "cn"
import { useCategoryStore } from "@/store/category"

const categories = [
  { id: 1, name: "Ноутбуки" },
  { id: 2, name: "Наушники и гарнитуры" },
  { id: 3, name: "Телевизоры" },
  { id: 4, name: "Видеокарты" },
  { id: 5, name: "Корпуса" },
  { id: 6, name: "Процессоры" },
]

export const Categories = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <nav className="inline-flex  gap-1 rounded-2xl bg-gray-200 p-1">
      {categories.map(({ name, id}, index) => (
        <a
          className={cn(
            "inline-flex justify-center items-center h-11 align-middle rounded-2xl px-5 font-bold",
            categoryActiveId === id &&
              "bg-white text-primary shadow-md shadow-gray-300"
          )}
          href={`/#${name}`}
          key={index}
        >
          {name}
        </a>
      ))}
    </nav>
  )
}
