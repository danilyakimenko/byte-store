import { Categories } from "@/components/shared/categories"
import { SortPopup } from "@/components/shared/sort-popup"

export const TopBar = () => {
  return (
    <section className="sticky top-0 z-10 flex items-center justify-between py-5 shadow-lg shadow-black/5">
      <Categories />
      <SortPopup />
      <hr className="absolute bottom-0 left-1/2 h-[1px] w-screen -translate-x-1/2 border-border" />
    </section>
  )
}
