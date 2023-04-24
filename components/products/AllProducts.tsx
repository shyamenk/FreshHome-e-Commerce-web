import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Spinner from '@/components/shared/Spinner';
import { AllProductProps } from 'pages/products';

const AllProducts = ({ allProducts }: AllProductProps) => {
  const { status } = useSession();
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  console.log('Hi');

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'unauthenticated') {
    router.push('/login');
  }

  const filter = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="">
        <form className="max-w-2xl px-4 mx-auto mt-12">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 border-gray-300 rounded-lg shadow-sm text-gray focus:border-gray-500 focus:ring-gray-500"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <h1 className="text-3xl md:pl-28">All Products</h1>
      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto mt-8 lg:grid-cols-4 sm:grid-cols-2">
        {filter?.map((item) => (
          <Link
            key={item.id}
            href={{
              pathname: `categories/${item.name}`,
              query: { productId: item.id }
            }}
          >
            <div className="border border-t-0 border-orange-100">
              <Image
                className="w-full rounded-t-lg md:w-full md:max-h-40 lg:max-h-42"
                src={item.imageURL}
                height={100}
                width={100}
                alt="product-image"
                priority
              />
              <div className="p-2 mt-2 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                  {item.name}
                </span>
                <h2 className="tracking-wide ">{item.description}</h2>
                <h2 className="font-semibold tracking-wide ">
                  Price &#x20B9;-{item.price}
                </h2>
                <div className="flex mt-2"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
