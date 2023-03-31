import ProductDetailPage from '@/components/products/ProductDetailPage'
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
      <ProductDetailPage product={product} />)
    </>
  )
}

export default ProductPage

export const getServerSideProps: GetServerSideProps = async context => {
  const {productId = []} = context.query

  const product = await prisma.product.findUnique({
    where: {
      id: productId as string,
    },
  })
  return {
    props: {
      product,
    },
  }
}
