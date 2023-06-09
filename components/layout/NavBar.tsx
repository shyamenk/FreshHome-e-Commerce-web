import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import DropDownMenu from '@/components/DropDown';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Spinner from '../shared/Spinner';
import CartDropdownMenu from '@/components/cart/CartDropDownMenu';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <nav className="z-30 flex items-center justify-between p-4 transition-colors duration-500 border-b shadow-sm ">
      <div className="flex items-center ml-12 space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill=""
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="red"
          className="w-8 h-8 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
          />
        </svg>

        <Link href="/">
          <div className="text-3xl font-bold text-seconadary2 font-poppins ">
            Fresh
            <span className="text-xl font-bold text-red-600 font-poppins">
              Home
            </span>
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <a
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded-full text-secondary1 hover:text-slate-400"
        >
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </a>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-10 bg-white border-r"
            style={{ height: '100vh', width: '200px', top: '74px' }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex-shrink-0 lg:inline-block lg:mt-0">
                <Link
                  href="/categories"
                  className="block px-4 py-2 text-secondary1 hover:rounded-lg hover:bg-gray-200 lg:inline-block lg:mt-0"
                >
                  Categories
                </Link>
                <Link
                  href="/products"
                  className="block px-4 py-2 text-secondary1 hover:rounded-lg hover:bg-gray-200 lg:inline-block lg:mt-0"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-secondary1 hover:rounded-lg hover:bg-gray-200 lg:inline-block lg:mt-0"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-secondary1 hover:rounded-lg hover:bg-gray-200 lg:inline-block lg:mt-0"
                >
                  About
                </Link>
                <button
                  onClick={() => router.push('/login')}
                  className="inline-flex px-4 py-2 mt-2 mr-12 text-sm text-white rounded-full 2 bg-secondary1 lg:mt-0 hover:bg-hover"
                >
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            }  lg:flex lg:items-center lg:justify-center w-full md:w-auto`}
          >
            <div className="text-lg font-semibold lg:flex-shrink">
              <Link
                href="/categories"
                className="block mt-4 mr-4 border-red-500 text-secondary1 lg:inline-block lg:mt-0 hover:text-gray-600 hover:border-b-2"
              >
                Categories
              </Link>
              <Link
                href="/products"
                className="block mt-4 mr-4 border-red-500 text-secondary1 lg:inline-block lg:mt-0 hover:text-gray-600 hover:border-b-2"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="block mt-4 mr-4 border-red-500 text-secondary1 lg:inline-block lg:mt-0 hover:text-gray-600 hover:border-b-2"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="block mt-4 mr-4 border-red-500 text-seconadary2 lg:inline-block lg:mt-0 hover:text-gray-600 hover:border-b-2"
              >
                About
              </Link>
              {session ? (
                <div className="inline-flex items-center gap-2 mr-2">
                  <DropDownMenu />
                  <CartDropdownMenu />
                </div>
              ) : (
                <button
                  onClick={() => router.push('/login')}
                  className="inline-flex px-8 py-2 mt-4 mr-12 text-sm text-white rounded-full bg-secondary1 lg:mt-0 hover:bg-hover"
                >
                  LogIn
                </button>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
