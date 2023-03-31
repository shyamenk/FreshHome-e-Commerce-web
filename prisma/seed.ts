import {PrismaClient} from '@prisma/client'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  const fakerRounds = 20

  // await prisma.category.deleteMany()
  // console.log('Deleted records in category table')

  // await prisma.product.deleteMany()
  // console.log('Deleted records in product table')
  console.log('Databse Seeding...')
  /// --------- Products ---------------
  for (let i = 0; i < fakerRounds; i++) {
    const res = await prisma.product.create({
      data: {
        name: faker.commerce.product(),
        description: faker.commerce.productName(),
        price: faker.datatype.number(100),
        quantity: faker.datatype.number(100),
        imageURL: faker.image.food(640, 480, true),
        discount: faker.datatype.number(100),
        category: {
          connectOrCreate: {
            where: {
              name: 'Fruits',
            },
            create: {
              name: 'Fruits',
            },
          },
        },
      },
    })
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
