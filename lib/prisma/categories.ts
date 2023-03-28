import {prisma} from '.'

export async function getCategory() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        product: {
          select: {
            imageURL: true,
          },
          take: 1,
        },
      },
      distinct: ['name'],
    })

    return {categories}
  } catch (error) {
    return {error}
  }
}
