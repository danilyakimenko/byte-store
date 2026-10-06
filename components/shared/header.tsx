import React from "react"
import { cn } from "cn"
import { Container } from "@/components/shared"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, ShoppingCart, User } from "lucide-react"

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link className="flex items-center gap-4" href="/">
          <Image
            src="https://moqimg.ru/35x35.png"
            alt="Logo"
            width={35}
            height={35}
          />
          <div>
            <h1 className="text-2xl font-black uppercase">Byte Store</h1>
            <p className="text-sm leading-3 text-gray-400">
              Дешевле уже некуда
            </p>
          </div>
        </Link>

        <div className="item-center flex gap-3">
          <Button className="item-center flex gap-1" variant="outline">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 ₽</b>
              <span className="mx-3 h-full w-[1px] bg-white/30" />
              <div className="item-center flex -translate-x-2 gap-1 transition duration-200 group-hover:opacity-0">
                <ShoppingCart className="relative" size={16} strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                width={20}
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
