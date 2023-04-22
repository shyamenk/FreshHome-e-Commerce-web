import { useRouter } from 'next/router';
import { FC, useContext, useEffect } from 'react';
import { CartContext } from '@/context/cartContext';
const Success: FC = () => {
  const router = useRouter();

  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="h-screen">
      <h1 className="text-3xl text-center text-green-600 ">
        Order Placed Successfully
      </h1>
      <button
        onClick={() => router.push('/')}
        className="px-4 py-2 text-center bg-red-500 rounded-md"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Success;
