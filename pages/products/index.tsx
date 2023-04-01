// import Spinner from '@/components/shared/Spinner'
import { prisma } from "@/lib/prisma";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Product } from "prisma/prisma-client";
const ProductListPage = (allProducts: Product[]) => {
  // const {status} = useSession()
  // const router = useRouter()

  //TODO:
  // if (status === 'loading') {
  //   return <Spinner />
  // }

  // if (status === 'unauthenticated') {
  //   router.push('/login')
  // }

  // if (status === 'authenticated') {
  //   return <div> Service Page added</div>
  // }

  return (
    <>
      {/* <div className="grid grid-cols-1 gap-10 mt-8 lg:grid-cols-4 sm:grid-cols-3">
        {allProducts.products?.map(item => (
          <Link
            key={item.id}
            href={{
              pathname: `product/${item.name}`,
              query: {productId: item.id},
            }}
          >
            <div className="border border-t-0 border-orange-100">
              <Image
                className="w-full rounded-t-lg md:w-full md:max-h-40 lg:max-h-42"
                src={item.imageURL}
                height={100}
                width={100}
                alt="product-image"
              />
              <div className="p-2 mt-2 mb-2 ">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                  {item.name}
                </span>
                <h2 className="tracking-wide ">{item.description}</h2>
                <h2 className="font-semibold tracking-wide ">
                  Price &#x20B9;-{item.price}
                </h2>
                <div className="flex mt-2">
                  {[...Array(Math.floor(Math.random() * 5) + 1)].map(
                    (_, index) => (
                      <AiFillStar
                        key={index}
                        color="orange"
                        aria-label="Rating"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
    </>
  );
};

export default ProductListPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("GetServerSide");

  const allProducts = await prisma.product.findMany();

  return {
    props: {
      allProducts: allProducts,
    },
  };
};
