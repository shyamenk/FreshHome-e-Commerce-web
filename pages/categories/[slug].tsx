import {GetServerSideProps} from 'next'
import {Product, Category} from 'prisma/prisma-client'

type ProductWithCategory = Product & {
  category: Category | null
}

const CategoryList = (products: ProductWithCategory[]) => {
  return (
    <>
      {/* <ul>
        {prod.map(prodcut => (
          <li key={prodcut.id}>
            <h1>{prodcut.name}</h1>
            <h1>{prodcut.description}</h1>
            <h1>{prodcut.price}</h1>
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default CategoryList

export const getServerSideProps: GetServerSideProps = async context => {
  const {params} = context
  const response = await fetch(
    `http://localhost:3000/api/products/${params?.slug}`,
  )
  const products = await response.json()

  return {
    props: {
      products,
    },
  }
}
