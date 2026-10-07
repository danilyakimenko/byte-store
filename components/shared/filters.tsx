import React from "react"
import { Title } from "@/components/shared/title"
import { FilterCheckbox } from "@/components/shared/filter-checkbox"
import { Input } from "@/components/ui"
import { cn } from "cn"
import { RangeSlider } from "@/components/shared/range-slider"

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <aside className={cn("grid gap-7", className)}>
      <Title className="font-bold" size="sm" text="Фильтрация" />

      <div className="grid gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="grid gap-3">
        <p className="font-bold">Цена от и до:</p>
        <div className="flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={98000}
            defaultValue={0}
          />
          <Input type="number" placeholder="98000" min={100} max={98000} />
        </div>
        <RangeSlider min={0} max={98000} step={10} value={[0, 98000]} />
      </div>


    </aside>
  )
}
