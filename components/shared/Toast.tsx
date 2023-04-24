import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NextPage } from 'next';

interface IProps {
  message: string;
}
const Toast: NextPage<IProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const hideToast = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(hideToast, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      // initial={{ y: '-100%' }}
      // animate={{ y: 0 }}
      // exit={{ y: '-100%' }}
      className="p-4 mx-auto text-white bg-green-500 rounded-md shadow-md "
    >
      {message}
    </motion.div>
  );
};

export default Toast;
