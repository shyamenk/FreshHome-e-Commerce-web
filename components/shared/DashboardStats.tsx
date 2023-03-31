export function DashboardStats({data}: any) {
  return (
    <div className="container items-center px-4 py-8 m-auto mt-5">
      <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col px-6 py-10 overflow-hidden duration-300 bg-white shadow-lg hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl hover:shadow-2xl group">
            <div className="flex flex-row items-center justify-between">
              <div className="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2 text-green-500 group-hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                12%
              </div>
            </div>
            <h1 className="mt-12 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl group-hover:text-gray-50"></h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Bounce Rate</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-indigo-600 group-hover:text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col px-6 py-10 overflow-hidden duration-300 bg-white shadow-lg hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl hover:shadow-2xl group">
            <div className="flex flex-row items-center justify-between">
              <div className="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
              <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2 text-green-500 group-hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                12%
              </div>
            </div>
            <h1 className="mt-12 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl group-hover:text-gray-50">
              42.34%
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Page Per Visits</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-indigo-600 group-hover:text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col px-6 py-10 overflow-hidden duration-300 bg-white shadow-lg hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl hover:shadow-2xl group">
            <div className="flex flex-row items-center justify-between">
              <div className="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2 text-green-500 group-hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                12%
              </div>
            </div>
            <pre className="mt-12 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl group-hover:text-gray-50">
              {JSON.stringify(data, null, 2)}
            </pre>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Total Monthly Visits</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-indigo-600 group-hover:text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col px-6 py-10 overflow-hidden duration-300 bg-white shadow-lg hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl hover:shadow-2xl group">
            <div className="flex flex-row items-center justify-between">
              <div className="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2 text-green-500 group-hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                12%
              </div>
            </div>
            <h1 className="mt-12 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl group-hover:text-gray-50">
              00:03:20%
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Avg. Visit Duration</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-indigo-600 group-hover:text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
