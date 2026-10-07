import { ArrowUpDown } from "lucide-react"

export const SortPopup = () => {
  return (
    <button className="inline-flex h-13 items-center gap-1 rounded-2xl bg-gray-200 px-5">
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className="text-primary">популярное</b>
    </button>
  )
}
