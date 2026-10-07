'use client'

import { FC, useEffect, useRef } from "react"
import { useIntersection } from "react-use"
import { ProductCard } from "@/components/shared/product-card"
import { Title } from "@/components/shared/title"

interface Props {
  title: string
  products: any[]
  listClassName?: string
  categoryId: number
}

export const ProductsGroup: FC<Props> = ({
  title,
  products,
  listClassName,
  categoryId,
}) => {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <section className="grid gap-10" id={title} ref={intersectionRef}>
      <Title
        className="font-bold"
        size="lg"
        text={title}
      />
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
