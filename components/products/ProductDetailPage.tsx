import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/context/cartContext';
import { CartItem } from '@/hooks/cartReducer';
import Image from 'next/image';
import { Product } from 'prisma/prisma-client';
import { AiFillStar } from 'react-icons/ai';
import Spinner from '../shared/Spinner';
import { useSession } from 'next-auth/react';

type Props = {
  product: Product;
};

const ProductDetailPage = ({ product }: Props) => {
  const { dispatch } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { data: session } = useSession();

  const router = useRouter();

  const addItem = async (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });

    if (session) {
      await fetch(`${process.env.SERVER}/api/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          total: item.price * item.quantity,
          userId: session?.user.id,
          cartItems: item
        })
      });
    } else {
      router.push('/login');
    }
  };

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, [router.isReady]);

  function incrementQty() {
    setQuantity((prevValue) => prevValue + 1);
  }

  function decrementQty() {
    if (quantity > 1) {
      setQuantity((prevValue) => prevValue - 1);
    }
  }

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

                <div className="flex items-center mt-4 space-x-3">
                  <button
                    onClick={decrementQty}
                    className="p-1 rounded-full decrease__quantity ring-1 ring-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    onClick={incrementQty}
                    className="p-1 rounded-full increase__quantity ring-1 ring-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        quantity: quantity,
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
