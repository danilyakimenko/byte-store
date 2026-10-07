import React from "react"
import { Title } from "@/components/shared/title"
import { FilterCheckbox } from "@/components/shared/filter-checkbox"

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <aside className={className}>
      <Title className="mb-5 font-bold" size="sm" text="Фильтрация" />
      <div className="grid gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </aside>
  )
}
