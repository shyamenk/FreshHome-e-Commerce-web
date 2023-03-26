import {ReactNode} from 'react'
import NavBar from './NavBar'

type Props = {
  children: ReactNode
}

export default function MainLayout({children}: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
