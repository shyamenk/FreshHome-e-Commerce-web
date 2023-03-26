import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {NextPage} from 'next'

interface IProps {
  message: string
}
const Toast: NextPage<IProps> = ({message}) => {
  const [isVisible, setIsVisible] = useState(true)

  const hideToast = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    const timeoutId = setTimeout(hideToast, 5000)
    return () => clearTimeout(timeoutId)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <motion.div
      initial={{y: '-100%'}}
      animate={{y: 0}}
      exit={{y: '-100%'}}
      className="p-4 text-white bg-red-500 rounded-md shadow-md"
    >
      {message}
    </motion.div>
  )
}

export default Toast
