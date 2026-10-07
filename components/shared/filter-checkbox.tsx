import React from "react"
import { Checkbox } from "../ui/checkbox"

export interface FilterCheckboxProps {
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,

}) => {
  const id = `checkbox-${String(value)}`

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        className="h-6 w-6 rounded-[8px]"
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        id={id}
      />
      <label className="flex-1 cursor-pointer leading-none" htmlFor={id}>
        {text}
      </label>
      {endAdornment}
    </div>
  )
}
