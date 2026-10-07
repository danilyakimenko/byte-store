import React from "react"
import { ProductsGroup } from "@/components/shared/products-group"

const productsGroupItems = [
  {
    title: "Комплектующие для ПК",
    products: [
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
    ],
    categoryId: 1,
  },
  {
    title: "Бытовые товары",
    products: [
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
      {
        id: 0,
        name: "RTX 5090",
        price: 395,
        imageSrc: "https://moqimg.ru/215x215.png",
      },
    ],
    categoryId: 2,
  },
]

export const ProductsGroupList = () => {
  return (
    <ul className="flex flex-col gap-20">
      {productsGroupItems.map((productGroupItem) => (
        <li key={productGroupItem.categoryId}>
          <ProductsGroup {...productGroupItem} />
        </li>
    ))}
  </ul>
  )
}
