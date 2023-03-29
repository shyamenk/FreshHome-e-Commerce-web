import {prisma} from '../../lib/prisma/index'

const CategoryList = products => {
  return (
    <>
      {products.products.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  )
}

export default CategoryList

export const getServerSideProps = async context => {
  const {params} = context
  const id = params.slug.toString()
  const products = await prisma.product.findMany({
    where: {
      categoryId: id,
    },
    include: {
      Category: true,
    },
  })
  return {
    props: {
      products,
    },
  }
}
