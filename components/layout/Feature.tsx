type Props = {}

export default function Feature({}: Props) {
  return (
    <>
      <div className="p-6 py-12 mb-4 text-gray-900 h-60 bg-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <h2 className="text-5xl font-bold tracking-tighter text-center text-white">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="py-2 space-x-2 text-center lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="text-lg font-bold">APPLET</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="block px-5 py-3 mt-4 text-gray-900 border border-gray-400 rounded-md lg:mt-0 bg-gray-50"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
