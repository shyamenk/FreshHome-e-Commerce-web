import {prisma} from '@/lib/prisma'
import {GetServerSideProps} from 'next'
import Image from 'next/image'
import {Product} from 'prisma/prisma-client'
import {AiFillStar} from 'react-icons/ai'
type Props = {
  product: Product
}

const ProductPage = ({product}: Props) => {
  return (
    <>
      <div className="min-h-screen mt-6 bg-primary">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-none w-full lg:max-w-xl">
              <div className="relative rounded aspect-w-3 aspect-h-4">
                <Image
                  src={product.imageURL}
                  width={600}
                  height={600}
                  alt="image"
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="flex-auto mt-8 lg:ml-10 lg:mt-0">
              <h1 className="text-3xl font-semibold text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <AiFillStar className="w-5 h-5 text-yellow-400" />
                  <AiFillStar className="w-5 h-5 text-yellow-400" />
                  <AiFillStar className="w-5 h-5 text-yellow-400" />
                  <AiFillStar className="w-5 h-5 text-gray-400" />
                  <AiFillStar className="w-5 h-5 text-gray-400" />
                </div>
                <span className="ml-2 text-gray-600">(3 reviews)</span>
              </div>
              <div className="mt-3">
                <span className="text-xl text-gray-700">${product.price}</span>
                <span className="ml-2 text-gray-500 line-through">$129.99</span>
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="size"
                >
                  Size
                </label>
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="quantity"
                >
                  Avilable Qty {product.quantity}
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="10"
                  className="block pl-2 bg-white border border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-8">
                <button className="px-4 py-2 text-white bg-yellow-400 rounded-md hover:bg-yellow-500">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
              {product.description}
            </h2>
            <div className="mt-4 prose-sm prose text-gray-500">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mattis massa id nibh tempor consequat. Integer varius eros a
                urna fermentum, vel volutpat ipsum pretium. Sed condimentum
                mauris sit amet nisi tincidunt, vel eleifend orci lacinia
              </p>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  )
}

export default ProductPage

export const getServerSideProps: GetServerSideProps = async context => {
  const {pId = []} = context.query

  const product = await prisma.product.findUnique({
    where: {
      id: pId[1] as string,
    },
  })
  return {
    props: {
      product,
    },
  }
}
