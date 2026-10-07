import type { Metadata } from "next"
import { Geist_Mono, Roboto } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Container, Header } from "@/components/shared"

const roboto = Roboto({ subsets: ["cyrillic"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title:
    "Byte-Store – интернет-магазин цифровой и бытовой техники по доступным ценам.",
  description:
    "Большой ассортимент электроники, цифровой и бытовой техники, а также товаров для дома, известных брендов в интернет-магазине Byte-Store по отличным ценам. Гарантия и сервис. Доставка!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        fontMono.variable,
        "font-sans",
        roboto.variable
      )}
    >
      <body className="flex flex-col gap-y-5">
        <Header />
        <main className="min-h-screen">
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  )
}
