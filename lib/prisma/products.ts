import { prisma } from '.';

interface IProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageURL: string;
  discount: number;
  category: string;
}
export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true
      }
    });
    return { products };
  } catch (error) {
    return { error };
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
        category: {
          connectOrCreate: {
            where: { name: product.category },
            create: { name: product.category }
          }
        }
      }
    });

    return { newProduct };
  } catch (error) {
    return { error };
  }
}
export async function getProductById(id: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        categoryId: id
      },
      include: { category: true }
    });
    return products;
  } catch (error) {
    return { error };
  }
}
