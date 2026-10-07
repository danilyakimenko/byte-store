import React from "react"
import { ProductCard } from "@/components/shared/product-card"
import { Title } from "@/components/shared/title"

interface Props {
  className?: string
  title: string
  products: any[]
  listClassName?: string
  categoryId: number
}

export const ProductsGroup: React.FC<Props> = ({
  className,
  title,
  products,
  listClassName,
  categoryId,
}) => {
  return (
    <section className={className}>
      <Title className="font-bold" size="md" text={title}/>
      <ul className="grid grid-cols-3 gap-[50px]">
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
