import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Title } from "@/components/shared/title"
import { Button } from "@/components/ui"
import { Plus } from "lucide-react"

interface Props {
  className?: string
  id: number
  name: string
  price: number
  imageSrc: string
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageSrc,
}) => {
  return (
    <article className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] items-center justify-center rounded-lg bg-secondary p-6">
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
          <span className="text-[20px]">
            от <b>{price}₽</b>
          </span>
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
