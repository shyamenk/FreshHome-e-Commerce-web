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
    'http://localhost:3000/api/category',
    fetcher,
  )

  if (error) return <div>failed to load</div>

  if (isLoading) return <Spinner />

  return (
    <>
      <section className="max-w-6xl py-6 mx-auto mt-4 bg-primary">
        <h1 className="mb-8 text-4xl text-center text-secondary1 font-poppins">
          Categories
        </h1>
        <div className="container flex flex-col justify-center p-4 mx-auto border rounded-lg">
          <div className="grid grid-cols-1 gap-4 text-xl text-center font-poppins lg:grid-cols-4 sm:grid-cols-2">
            {data?.map(category => (
              <div key={category.id}>
                <Link href={`categories/${category.id}`}>
                  <Image
                    className="object-cover w-full h-32 mb-3 cursor-pointer aspect-square"
                    src={category.product[0].imageURL}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h2>{category.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
