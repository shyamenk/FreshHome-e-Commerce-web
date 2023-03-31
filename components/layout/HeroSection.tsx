import Image from 'next/image'
import heroImage from '@/public/hero.png'

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center max-w-6xl gap-12 px-8 mx-auto py-14 bg-primary md:flex-row">
        <Image
          src={heroImage}
          className="w-full rounded-full md:w-1/3"
          alt="Hero Image"
          height={300}
          width={300}
          priority
        />
        <div className="md:ml-8 ">
          <h1 className="text-6xl font-medium text-gray-900 leading-wide">
            Bring The <span className="text-red-600">Store</span>
            <br /> To Your <span className="text-red-600">Door</span>
          </h1>
          <p className="mt-4 font-medium text-gray-700">
            Best Groceries app ever . Pick your desired groceries from the menu
          </p>
          <div className="flex mt-8">
            <button className="px-6 py-2 font-semibold text-white rounded-full bg-secondary1 hover:bg-red-600">
              Order Now
            </button>
            <button className="px-6 py-2 ml-4 font-semibold text-black border rounded-full border-secondary1 hover:bg-secondary1 hover:text-white">
              Category
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
