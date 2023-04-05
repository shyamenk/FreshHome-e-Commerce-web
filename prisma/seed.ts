import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const fakerRounds = 20;

  // --------- Delete  Products and category Records ---------------

  // await prisma.category.deleteMany();
  // console.log('Deleted records in category table');

  // await prisma.product.deleteMany();
  // console.log('Deleted records in product table');

  console.log('Databse Seeding...');

  // --------- Add Products With Category ---------------

  for (let i = 0; i < fakerRounds; i++) {
    await prisma.product.create({
      data: {
        name: faker.commerce.product(),
        description: faker.commerce.productName(),
        price: faker.datatype.number(100),
        quantity: faker.datatype.number(100),
        imageURL: faker.image.image(640, 480, true),
        discount: faker.datatype.number(100),
        category: {
          connectOrCreate: {
            where: {
              name: faker.helpers.arrayElement([
                'Fruits',
                'Vegetables',
                'Canned Food',
                'Oil',
                'Snacks',
                'Beauty',
                'Meat',
                'Fish'
              ])
            },
            create: {
              name: faker.helpers.arrayElement([
                'Fruits',
                'Vegetables',
                'Canned Food',
                'Oil',
                'Snacks',
                'Beauty',
                'Meat',
                'Fish'
              ])
            }
          }
        }
      }
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
