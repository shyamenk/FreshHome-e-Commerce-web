import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { getStripe } from '@/utils/stripe';
import { CartContext } from '@/context/cartContext';
import Image from 'next/image';

type Props = {
  id: string;
};

const OrderConfirm = () => {
  const [session, setSession] = useState<Props | null>();
  const { cart, removeFromCart, getTotal, changeQuantity } =
    useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cart })
      });
      const session = await response.json();
      setSession(session);
    };
    if (cart.length) fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const removeItem = async (id: string) => {
    removeFromCart(id);
  };

  function incrementQty(id: string) {
    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const existingItem = cart[itemIndex];
      const newQuantity = existingItem.quantity + 1;
      changeQuantity(id, newQuantity);
    }
  }

  function decrementQty(id: string) {
    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const existingItem = cart[itemIndex];
      const newQuantity = existingItem.quantity - 1;
      if (newQuantity > 0) {
        changeQuantity(id, newQuantity);
      } else {
        removeItem(id);
      }
    }
  }

  const checkoutHandler = async () => {
    const stripe = await getStripe();
    if (cart.length === 0 || !session) return;
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id
    });
    if (result?.error) {
      console.log(result.error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col max-w-xl p-2 mx-auto mt-12 space-y-2 border rounded-md md:max-w-2xl sm:p-10 bg-primary text-secondary">
        <h2 className="text-2xl text-center text-cyan-700 ">Order Summary</h2>
        <hr />
        <h2 className="mt-4 text-xl">Your cart has {cart?.length} items</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col py-2 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <Image
                  className="flex-shrink-0 object-cover w-20 h-20 bg-gray-500 border-transparent rounded outline-none sm:w-32 sm:h-32"
                  alt="product-image"
                  src={item.image}
                  height={200}
                  width={200}
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">INR {item?.price}</p>
                      <p className="text-sm text-gray-600">{item?.quantity}</p>
                    </div>
                  </div>
                  <div className="text-md">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                      onClick={() => removeItem(item?.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-red-500"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <div className="flex items-center mt-4 space-x-3">
                      <button
                        onClick={() => decrementQty(item?.id)}
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
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => incrementQty(item.id)}
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
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {cart.length > 0 ? (
          <>
            <div className="space-y-1 text-right">
              <p className="font-bold ">
                Total amount: {getTotal()}
                <span className="font-semibold"> </span>
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <Link href={'/'}>
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md border-secondary hover:bg-red-500 hover:text-primary hover:border-none"
                >
                  Back
                  <span className="sr-only sm:not-sr-only">to Shop</span>
                </button>
              </Link>
              <button
                type="button"
                className="px-6 py-2 bg-red-500 border border-red-500 rounded-md text-primary"
                onClick={checkoutHandler}
              >
                <span className="sr-only sm:not-sr-only">Checkout</span>
              </button>
            </div>
          </>
        ) : (
          <Link href="/categories">
            <button
              type="button"
              className="px-6 py-2 border rounded-md border-secondary hover:bg-red-500 hover:text-primary hover:border-none"
            >
              Back
              <span className="sr-only sm:not-sr-only">to Shop</span>
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default OrderConfirm;
