import AdminLayout from '@/components/layout/AdminLayout';
import Spinner from '@/components/shared/Spinner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

// type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <Spinner />;
  }

  // if (status === 'unauthenticated') {
  //   router.push('/login')
  // }

  if (session?.user.role === 'USER') {
    router.push('/');
  }
  if (session?.user.role === 'ADMIN') {
    return (
      <>
        <div className="p-4 pt-8 text-4xl font-bold text-secondary1 px-auto">
          Welcome Admin!
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-5 pt-4 mt-4 mb-4 lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 mb-3 break-words border rounded-lg shadow-lg bg-primary xl:mb-0">
              <div className="flex-auto p-4">
                <div className="flex flex-wrap">
                  <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                    <h5 className="text-xs font-bold uppercase text-blueGray-400">
                      Sales
                    </h5>
                    <span className="text-xl font-semibold text-blueGray-700">
                      200000 USD
                    </span>
                  </div>
                  <div className="relative flex-initial w-auto pl-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-yellow-400 rounded-full shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-blueGray-400">
                  <span className="mr-2 text-cyan-400">
                    <i className="fas fa-arrow-up"></i> 10%
                  </span>
                  <span className="whitespace-nowrap"> Since last Week </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-5 pt-4 mt-4 mb-4 lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 mb-3 break-words border rounded-lg shadow-lg bg-primary xl:mb-0">
              <div className="flex-auto p-4">
                <div className="flex flex-wrap">
                  <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                    <h5 className="text-xs font-bold uppercase text-blueGray-400">
                      Total Revenue
                    </h5>
                    <span className="text-xl font-semibold text-blueGray-700">
                      100000 USD
                    </span>
                  </div>
                  <div className="relative flex-initial w-auto pl-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white rounded-full shadow-lg bg-stats">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-blueGray-400">
                  <span className="mr-2 text-emerald-500">
                    <i className="fas fa-arrow-up"></i> 10%
                  </span>
                  <span className="whitespace-nowrap"> Since last Week </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-5 pt-4 mt-4 mb-4 lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 mb-3 break-words border rounded-lg shadow-lg bg-primary xl:mb-0">
              <div className="flex-auto p-4">
                <div className="flex flex-wrap">
                  <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                    <h5 className="text-xs font-bold uppercase text-blueGray-400">
                      Total Customers
                    </h5>
                    <span className="text-xl font-semibold text-blueGray-700">
                      1000
                    </span>
                  </div>
                  <div className="relative flex-initial w-auto pl-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white rounded-full shadow-lg bg-emerald-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-blueGray-400">
                  <span className="mr-2 text-emerald-500">
                    <i className="fas fa-arrow-up"></i> 15%
                  </span>
                  <span className="whitespace-nowrap"> Since last Week </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

// export const getServerSideProps = async () => {
//   const product = await prisma.product.findMany({
//     include: {
//       Category: true,
//     },
//   })

//   return {props: {product}}
// }

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <>{page}</>
    </AdminLayout>
  );
};

export default AdminDashboard;
