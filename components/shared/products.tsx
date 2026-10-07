import { Filters } from "@/components/shared/filters"
import { ProductsGroupList } from "@/components/shared/products-group-list"

export const Products = () => {
  return (
    <section className="my-10 grid grid-cols-[250px_1fr] gap-15">
      <Filters />
      <ProductsGroupList />
    </section>
  )
}
