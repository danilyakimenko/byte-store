import { Container, Title } from "@/components/shared"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, Monitor, ShoppingCart, User } from "lucide-react"

export const Header = () => {
  return (
    <header className="border border-b">
      <Container className="flex items-center justify-between py-8">
        <Link
          className="flex items-center gap-4"
          href="/"
        >
          <Monitor size={35} />
          <div>
            <Title
              className="font-bold text-primary"
              text="Byte Store"
              size="xl"
            />
            <p className="text-sm leading-3 text-gray-400">
              Собери компьютер мечты
            </p>
          </div>
        </Link>

        <div className="item-center flex gap-3">
          <Button
            className="item-center flex gap-1"
            variant="outline"
          >
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 ₽</b>
              <span className="mx-3 h-full w-px bg-white/30" />
              <div className="item-center flex -translate-x-2 gap-1 transition duration-200 group-hover:opacity-0">
                <ShoppingCart
                  className="relative"
                  size={16}
                  strokeWidth={2}
                />
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
