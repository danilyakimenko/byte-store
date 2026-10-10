import { prisma } from './prisma-client'
import { hashSync } from "bcrypt"
import { categories } from "@/prisma/constants"

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
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
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
