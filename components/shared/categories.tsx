'use client'

import { cn } from "cn"
import { useCategoryStore } from "@/store/category"

const categories = [
  "Ноутбуки",
  "Наушники и гарнитуры",
  "Телевизоры",
  "Видеокарты",
  "Корпуса",
  "Процессоры",
]

export const Categories = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <nav className="inline-flex gap-1 rounded-2xl bg-gray-200 p-1">
      {categories.map((category, index) => (
        <button
          className={cn(
            "h-11 rounded-2xl px-5 font-bold",
            categoryActiveId === index &&
              "bg-white text-primary shadow-md shadow-gray-300"
          )}
          key={index}
        >
          {category}
        </button>
      ))}
    </nav>
  )
}
