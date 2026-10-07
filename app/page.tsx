import {
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared"

export default function Page() {
  return (
    <>
      <Title
        className="font-extrabold"
        size="lg"
        text="Все товары"
      />
      <TopBar />
      <section className="my-10 grid grid-cols-[250px_1fr] gap-20">
        <Filters />
        <div>
          <ProductsGroupList
            title="Комплектующие для ПК"
            products={[
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
            ]}
            categoryId={1}
          />
          <ProductsGroupList
            title="Бытовые товары"
            products={[
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
            ]}
            categoryId={1}
          />
        </div>
      </section>
    </>
  )
}
