import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Title } from "@/components/shared/title"
import { Button } from "@/components/ui"
import { Plus } from "lucide-react"

interface Props {
  id: number
  name: string
  price: number
  imageSrc: string
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageSrc }) => {
  return (
    <article className="border border-gray-200 p-4 rounded-2xl">
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] items-center justify-center rounded-lg">
          <Image
            width={215}
            height={215}
            src={imageSrc}
            alt={name}
          />
        </div>
        <Title
          className="font-bold"
          text={name}
          size="sm"
        />
        <p className="text-sm text-gray-400">Описание товара</p>
        <div className="flex items-center justify-between gap-2">
          <b className="text-xl">{price} ₽</b>
          <Button
            className="text-base font-bold"
            variant="secondary"
          >
            <Plus
              className="mr-1"
              size={20}
            />
            Добавить
          </Button>
        </div>
      </Link>
    </article>
  )
}
