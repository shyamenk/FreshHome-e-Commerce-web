import AllProducts from '@/components/products/AllProducts';
import { prisma } from '@/lib/prisma';
import { GetServerSideProps } from 'next';
import { Product } from 'prisma/prisma-client';
import React from 'react';
export type AllProductProps = {
  allProducts: Product[];
};
const ProductListPage = ({ allProducts }: AllProductProps) => {
  return <AllProducts allProducts={allProducts} />;
};

export default ProductListPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const allProducts = await prisma.product.findMany();

  return {
    props: {
      allProducts: allProducts
    }
  };
};
