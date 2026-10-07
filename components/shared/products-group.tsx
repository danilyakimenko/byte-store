import React from "react"
import { ProductCard } from "@/components/shared/product-card"
import { Title } from "@/components/shared/title"

interface Props {
  title: string
  products: any[]
  listClassName?: string
  categoryId: number
}

export const ProductsGroup: React.FC<Props> = ({
  title,
  products,
  listClassName,
  categoryId,
}) => {
  return (
    <section className="grid gap-10">
      <Title className="font-bold" size="lg" text={title}/>
      <ul className="grid grid-cols-3 gap-5">
        {products.map(({ id, name, imageSrc, price }) => (
          <li key={id}>
            <ProductCard
              id={id}
              name={name}
              imageSrc={imageSrc}
              price={price}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
