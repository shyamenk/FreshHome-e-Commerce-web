import Image from 'next/image'
import useSWR from 'swr'
import fetcher from 'util/fetcher'
import {ErrorResponse} from 'types/error'
import Link from 'next/link'
import Spinner from '../shared/Spinner'

interface ProductImage {
  imageURL: string
}

export interface CategoryWithImage {
  id: number
  name: string
  product: [ProductImage]
}
export default function Feature() {
  const {data, error, isLoading} = useSWR<CategoryWithImage[], ErrorResponse>(
    `${process.env.SERVER}/api/category`,
    fetcher,
  )

  if (error) return <div>failed to load</div>

  if (isLoading) return <Spinner />

  return (
    <>
      <section className="max-w-6xl px-6 py-6 mx-auto mt-4 bg-primary">
        <h1 className="pl-4 mb-8 text-3xl text-secondary1 font-poppins">
          Popular Categories
        </h1>
        <div className="container flex flex-col justify-center p-4 mx-auto v ">
          <div className="grid grid-cols-1 gap-6 text-xl text-center border-t-0 rounded-t-lg font-poppins lg:grid-cols-4 sm:grid-cols-3">
            {data?.map(category => (
              <div key={category.id}>
                <Link
                  href={{
                    pathname: `/categories/${category.name}`,
                    query: {categoryId: category.id},
                  }}
                >
                  <div className="border aspect-w-16 aspect-h-8">
                    <Image
                      src={category.product[0].imageURL}
                      alt="My Image"
                      width={700}
                      height={475}
                    />
                  </div>
                  <h2 className="mb-4">{category.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
