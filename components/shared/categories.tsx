import React from "react"
import { cn } from "cn"

interface Props {
  className?: string
}

const categories = [
  "Ноутбуки",
  "Наушники и гарнитуры",
  "Телевизоры",
  "Видеокарты",
  "Корпуса",
  "Процессоры",
]

const activeIndex = 0

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {categories.map((category, index) => (
        <button
          className={cn("flex h-11 items-center rounded-2xl px-5 font-bold",
            activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  )
}