import {GetServerSideProps} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {prisma} from '../../lib/prisma/index'
import {Category, Product} from 'prisma/prisma-client'

type Props = {
  products: Product[] & Category
}
const CategoryList = (products: Props) => {
  return (
    <>
      <section className="bg-primary">
        <div className="container max-w-6xl px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
            Product By Category
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-4">
            {products.products.map(item => (
              <Link
                key={item.id}
                href={`/categories/${item.categoryId}/${item.id}`}
              >
                <div className="border-b border-blue-800 rounded">
                  <Image
                    className="object-cover w-40 h-40 rounded-lg lg:w-64"
                    src={item.imageURL}
                    height={100}
                    width={100}
                    alt="product-image"
                  />
                  <div className="p-2 mt-6 mb-2 ">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                      {item.name}
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">
                      {item.description}
                    </h2>
                    <h2 className="font-semibold tracking-wide ">
                      {' '}
                      &#x20B9;-{item.price}
                    </h2>
                  </div>
                  {/* <p className="p-2 mt-6 mb-2">
                  Mauris et lorem at elit tristique dignissim et ullamcorper
                  elit. In sed feugiat mi. Etiam ut lacinia dui.
                </p> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryList

export const getServerSideProps: GetServerSideProps = async context => {
  const {params} = context
  const id = params?.slug
  const products = await prisma.product.findMany({
    where: {
      categoryId: id as string,
    },
    include: {
      category: true,
    },
  })
  return {
    props: {
      products,
    },
  }
}
