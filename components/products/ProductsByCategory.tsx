import { Category, Product } from 'prisma/prisma-client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  products: Product[] & Category;
};

function truncate(str: string) {
  return str.slice(0, 10);
}

const ProductsByCategory = ({ products }: Props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <section className="bg-primary">
        <div className="container max-w-6xl px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
            {slug}
          </h1>
          <div className="grid grid-cols-1 gap-10 mt-8 lg:grid-cols-4 sm:grid-cols-3">
            {products.map((item) => (
              <Link
                key={item.id}
                href={{
                  pathname: `/categories/${slug}/${item.name}`,
                  query: { productId: item.id }
                }}
              >
                <div className="transition-all duration-300 ease-in-out border-2 border-t-0 rounded-md bg-slate-50 hover:scale-125 ">
                  <div className="">
                    <Image
                      src={item.imageURL}
                      alt="My Image"
                      width={278}
                      height={356}
                    />
                  </div>
                  <div className="p-2 mt-2 mb-2 text-center ">
                    <span className="block text-xs font-medium tracking-widest uppercase">
                      {item.name}
                    </span>
                    <h2 className="tracking-wide max-h-12">
                      {truncate(item.description)}
                    </h2>
                    <h2 className="font-semibold tracking-wide ">
                      Price &#x20B9;-{item.price}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsByCategory;
