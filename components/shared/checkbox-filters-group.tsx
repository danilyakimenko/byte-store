"use client"

import React, { useState } from "react"
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox"
import { Input } from "@/components/ui"

type Item = FilterCheckboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValues?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 6,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValues,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit)

  return (
    <div className="grid gap-y-4">
      <p className="font-bold">{title}</p>
      {showAll && (
        <Input
          className="bg-gray-50"
          onChange={onChangeSearchInput}
          placeholder={searchInputPlaceholder}
        />
      )}
      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {list.map(({ value, text, endAdornment }, index) => (
          <FilterCheckbox
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            value={value}
            text={text}
            endAdornment={endAdornment}
            key={index}
          />
        ))}
      </div>
      {items.length > limit && (
        <button className="text-primary" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Скрыть" : "Показать все"}
        </button>
      )}
    </div>
  )
}
