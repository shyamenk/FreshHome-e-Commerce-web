import {prisma} from '.'

interface IProduct {
  name: string
  description: string
  price: number
  quantity: number
  imageURL: string
  discount: number
  category: string
}

export async function getProducts<IProduct>() {
  try {
    const products = await prisma.product.findMany({
      include: {
        Category: true,
      },
    })
    return {products}
  } catch (error) {
    return {error}
  }
}

export async function createProduct(product: IProduct) {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        imageURL: product.imageURL,
        discount: product.discount,
      },
    })
    const result = await prisma.category.create({
      data: {
        name: product.category,
        description: product.description,
        product: {
          connect: {
            id: newProduct.id,
          },
        },
      },
    })
    return {result}
  } catch (error) {
    return {error}
  }
}
export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {id},
      include: {Category: true},
    })
    return {product}
  } catch (error) {
    return {error}
  }
}
