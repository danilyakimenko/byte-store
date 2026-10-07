import React from "react"
import { cn } from "cn"
import { Categories } from "@/components/shared/categories"
import { SortPopup } from "@/components/shared/sort-popup"

interface Props {
  className?: string
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex items-center justify-between bg-white py-5 shadow-lg shadow-black/5",
        className
      )}
    >
      <Categories />
      <SortPopup />
      <hr className="absolute bottom-0 left-1/2 h-[1px] w-screen -translate-x-1/2 border-border" />
    </div>
  )
}
