import { useCart } from '@/context/cartContext';
import { CartItem } from '@/hooks/cartReducer';
import Image from 'next/image';
import { Product } from 'prisma/prisma-client';
import { AiFillStar } from 'react-icons/ai';
import Spinner from '../shared/Spinner';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {
  product: Product;
};

const ProductDetailPage = ({ product }: Props) => {
  const { dispatch } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, [router.isReady]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen mt-6 bg-primary">
          <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-none w-full lg:max-w-xl">
                <div className="transition-all duration-300 ease-in-out border-4 border-gray-200 rounded hover:scale-110 duration-30 aspect-w-16 aspect-h-9">
                  <Image
                    src={product.imageURL}
                    alt="My Image"
                    width={278}
                    height={356}
                    priority
                  />
                </div>
              </div>
              <div className="flex-auto mt-8 lg:ml-10 lg:mt-0">
                <h1 className="mb-2 text-3xl font-semibold text-secondary1">
                  {product.name}
                </h1>
                <h2>{product.description}</h2>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    <AiFillStar className="w-5 h-5 text-red-400" />
                    <AiFillStar className="w-5 h-5 text-red-400" />
                    <AiFillStar className="w-5 h-5 text-red-400" />
                    <AiFillStar className="w-5 h-5 text-red-400" />
                    <AiFillStar className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="ml-2 text-slate-500">(3 reviews)</span>
                </div>
                <div className="mt-3">
                  <span className="text-xl text-gray-700">
                    ${product.price}
                  </span>
                  <span className="ml-2 text-gray-500 line-through">
                    $129.99
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-4 ">
                  <label
                    className="block mb-2 font-bold text-secondary"
                    htmlFor="quantity"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="10"
                    defaultValue="0"
                    className="block h-8 p-2 bg-white border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        quantity: product.quantity,
                        price: product.price,
                        image: product.imageURL,
                        description: product.description
                      })
                    }
                    className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
