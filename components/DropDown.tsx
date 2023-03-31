import {signOut, useSession} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useRef, useEffect} from 'react'

type DropdownMenuProps = {}

const DropdownMenu: React.FC<DropdownMenuProps> = () => {
  const {data: session} = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav ref={menuRef} className="relative z-10 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 overflow-hidden rounded-full "
      >
        {session ? (
          <Image
            src={session.user.image || ''}
            alt="avatar"
            fill
            sizes="100vh"
          />
        ) : (
          <Image src="/avatar.png" alt="avatar" fill sizes="100vh" />
        )}
      </button>

      <div
        className={`${
          isOpen ? '' : 'hidden'
        } absolute bg-white rounded-lg shadow-xl py-2 divide-y `}
      >
        <div className="absolute w-48 py-2 mt-2 bg-white rounded-md shadow-xs -right-12 top-0.5 ">
          <Link
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            Profile
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            Settings
          </Link>
          <Link
            onClick={() => signOut({callbackUrl: '/login'})}
            href="/"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            Sign out
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default DropdownMenu
