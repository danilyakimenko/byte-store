import { Filters, Title, TopBar } from "@/components/shared"

export default function Page() {
  return (
    <>
      <Title className="font-extrabold" size="lg" text="Все товары" />
      <TopBar />
      <section className="grid grid-cols-[250px_1fr] gap-15 my-10">
        <Filters />
        <section>
          <h2 className="sr-only">Список товаров</h2>
          Список товаров
        </section>
      </section>
    </>
  )
}
