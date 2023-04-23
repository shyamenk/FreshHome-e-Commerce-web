import { useRouter } from 'next/router';
import React from 'react';

const Cancel = () => {
  const router = useRouter();
  return (
    <div className="h-screen">
      <h1 className="text-3xl text-center text-red-600 ">
        Your Order Cancelled
      </h1>
      <button
        onClick={() => router.push('/order')}
        className="px-4 py-2 text-center bg-red-500 rounded-md"
      >
        Retry
      </button>
    </div>
  );
};

export default Cancel;
