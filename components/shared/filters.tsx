import React from "react"
import { Title } from "@/components/shared/title"
import { FilterCheckbox } from "@/components/shared/filter-checkbox"
import { Input } from "@/components/ui"
import { RangeSlider } from "@/components/shared/range-slider"
import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group"

export const Filters = () => {
  return (
    <aside className="flex flex-col gap-6">
      <Title
        className="font-bold"
        size="md"
        text="Фильтрация"
      />

      <div className="grid gap-4">
        <FilterCheckbox
          text="Можно собирать"
          value="1"
        />
        <FilterCheckbox
          text="Новинки"
          value="2"
        />
      </div>

      <div className="grid gap-5">
        <p className="font-bold">Цена от и до:</p>
        <div className="flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={98000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="98000"
            min={0}
            max={98000}
          />
        </div>
        <RangeSlider
          min={0}
          max={98000}
          step={10}
          value={[0, 98000]}
        />
      </div>

      <CheckboxFiltersGroup
        title="Категории"
        defaultItems={[
          { text: "Видеокарты", value: "1" },
          { text: "Процессоры", value: "2" },
          { text: "Блоки питания", value: "3" },
          { text: "Материнские платы", value: "4" },
          { text: "Оперативная память", value: "5" },
          { text: "Жесткие диски", value: "6" },
        ]}
        items={[
          { text: "Видеокарты", value: "1" },
          { text: "Процессоры", value: "2" },
          { text: "Блоки питания", value: "3" },
          { text: "Материнские платы", value: "4" },
          { text: "Оперативная память", value: "5" },
          { text: "Жесткие диски", value: "6" },
          { text: "Видеокарты", value: "1" },
          { text: "Процессоры", value: "2" },
          { text: "Блоки питания", value: "3" },
          { text: "Материнские платы", value: "4" },
          { text: "Оперативная память", value: "5" },
          { text: "Жесткие диски", value: "6" },
        ]}
      />
    </aside>
  )
}
