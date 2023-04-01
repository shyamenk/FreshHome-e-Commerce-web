import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma/index";
import { Category, Product } from "prisma/prisma-client";
import ProductsByCategory from "@/components/products/ProductsByCategory";
import { Suspense } from "react";

type Props = {
  products: Product[] & Category;
};

const CategoryList = ({ products }: Props) => {
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <ProductsByCategory products={products} />
      </Suspense>
    </>
  );
};

export default CategoryList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { categoryId } = query;
  const products = await prisma.product.findMany({
    where: {
      categoryId: categoryId as string,
    },
    include: {
      category: true,
    },
  });
  return {
    props: {
      products,
    },
  };
};
