import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const closeModal = () => {
  //   setIsOpen(false);
  // };
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={toggle}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Open Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75"
          >
            <div className="max-w-xl p-8 bg-white rounded-lg">
              <button
                onClick={toggle}
                className="float-right text-gray-600 hover:text-secondary1"
              >
                X
              </button>
              <h1 className="mb-4 text-2xl font-bold text-secondary1">
                Contact Me
              </h1>
              <form>
                <label
                  htmlFor="name"
                  className="block mb-2 font-bold text-secondary"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-2 py-1 bg-gray-100 border border-red-400 rounded-lg ring-0 focus:outline-none focus:border-red-500 focus:bg-none"
                />
                <label
                  htmlFor="email"
                  className="block mt-4 mb-2 font-bold text-secondary"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-2 py-1 bg-gray-100 border border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                />
                <label
                  htmlFor="message"
                  className="block mt-4 mb-2 font-bold text-secondary"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-2 py-1 bg-gray-100 border border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                />

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-4 font-bold text-white bg-red-700 rounded-full hover:bg-red-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
