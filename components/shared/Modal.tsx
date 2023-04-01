import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Open Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75"
          >
            <div className="max-w-xl p-8 bg-white rounded-lg">
              <button
                onClick={closeModal}
                className="float-right text-gray-600 hover:text-gray-800"
              ></button>
              <h1 className="mb-4 text-2xl font-bold text-gray-800">
                Modal Title
              </h1>
              <form>
                <label
                  htmlFor="name"
                  className="block mb-2 font-bold text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-2 py-1 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <label
                  htmlFor="email"
                  className="block mt-4 mb-2 font-bold text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-2 py-1 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="message"
                  className="block mt-4 mb-2 font-bold text-gray-700"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-2 py-1 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-4 font-bold text-white bg-purple-700 rounded-full hover:bg-purple-500"
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
