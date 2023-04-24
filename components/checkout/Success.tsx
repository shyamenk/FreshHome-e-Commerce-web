import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { CartContext } from '@/context/cartContext';
import Toast from '../shared/Toast';
// import Image from 'next/image';

interface LineItem {
  price: {
    unit_amount: number;

    product: {
      name: string;
      images: string;
    };
  };
  description: string;

  quantity: number;
}

type Product = {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string[];
  quantity: number;
  price: number;
};

function Success() {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    query: { sessionId }
  } = useRouter();

  const URL = sessionId ? `/api/checkout/${sessionId}` : null;
  const { data: checkoutSession, error } = useSWR(URL, fetcher);

  if (error) return <div>failed to load the session</div>;

  const customer = checkoutSession?.customer_details;

  const products = checkoutSession?.line_items?.data?.map((item: LineItem) => ({
    name: item.price.product.name,
    description: item.description,
    image: item.price.product.images, // assuming the product has at least one image
    price: item.price.unit_amount,
    quantity: item.quantity
  }));

  const payment = checkoutSession?.payment_intent;

  const subtotal = checkoutSession?.amount_subtotal;
  const total = checkoutSession?.amount_total;
  const discount = checkoutSession?.total_details?.amount_discount;
  const tax = checkoutSession?.total_details?.amount_tax;

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-8 px-4 py-16 max-w-8xl sm:px-6 sm:py-24 lg:px-8 md:grid-cols-2">
        <div className="text-center">
          <h1 className="mb-2 text-lg font-medium text-emerald-600">
            Thanks for ordering
          </h1>
          <p className="mt-2 mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:p-0">
            Payment successful
          </p>
          <Toast message=" Payment successful" />
          <p className="text-base font-semibold text-gray-700">
            We appreciate your order, we’re currently processing it. So hang
            tight and we’ll send you confirmation very soon!
          </p>
          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Order number</dt>
            <dd className="mt-2 text-indigo-600">
              {checkoutSession?.payment_intent?.id}
            </dd>
          </dl>
        </div>
        <div>
          <div className="border-gray-200 ">
            <h2 className="p-0 mb-4 text-3xl">Order Summary</h2>
            <hr />
            {products?.map((product: Product) => (
              <div
                key={product.name}
                className="flex py-2 space-x-6 border-b border-gray-200 "
              >
                {/* <div className="flex-none">
                  <Image
                    src={product?.image[0]}
                    alt={product?.description}
                    width={50}
                    height={50}
                    className="object-cover object-center w-20 h-20 bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                  />
                </div> */}
                <div className="flex flex-col flex-auto ">
                  <div className="mb-2">
                    <h4 className="font-medium text-gray-900">
                      {product.name}
                    </h4>
                  </div>
                  <div className="flex justify-between ">
                    <p className="text-sm font-medium text-gray-500">
                      Qty {product.quantity}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price / 100}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between py-2 text-sm font-medium">
              <p>Subtotal</p>
              <p>${subtotal / 100}</p>
            </div>
            {discount ? (
              <div className="flex justify-between py-2 text-sm font-medium">
                <p>Discount</p>
                <p>-${discount / 100}</p>
              </div>
            ) : null}
            {tax ? (
              <div className="flex justify-between py-2 text-sm font-medium">
                <p>Tax</p>
                <p>${tax / 100}</p>
              </div>
            ) : null}
            <div className="flex justify-between py-2 text-sm font-medium">
              <p>Total</p>
              <p>${total / 100}</p>
            </div>
          </div>
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              <div className="pt-4 border-t border-gray-200">
                <dt className="text-lg font-medium text-gray-800">
                  Shipping address
                </dt>
                <dd className="mt-2 text-gray-700 text-md">
                  {customer?.name}
                  <br />
                  {customer?.address?.line1}
                  <br />
                  {customer?.address?.line2}
                  {customer?.address?.line2}
                  {customer?.address?.city}, {customer?.address?.state}{' '}
                  {customer?.address?.postal_code}
                  <br />
                  {customer?.address?.country}
                </dd>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <dt className="text-lg font-medium text-gray-800">
                  Payment information
                </dt>
                <dd className="mt-2 text-gray-700 text-md">
                  <p>Method: {payment?.payment_method_types[0]}</p>
                  <p>Status: {payment?.status}</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
