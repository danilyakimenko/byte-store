import { prisma } from './prisma-client'
import { hashSync } from "bcrypt"
import { categories, products } from "@/prisma/constants"

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@example.com",
        password: hashSync("111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Administrator",
        email: "admin@example.com",
        password: hashSync("222", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  })

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.product.createMany({
    data: products
  })

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        token: "111",
        totalAmount: 0,
      },
      {
        userId: 2,
        token: "222",
        totalAmount: 0,
      }
    ]
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await down()
    await up()
  } catch (error) {
    console.log(error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
