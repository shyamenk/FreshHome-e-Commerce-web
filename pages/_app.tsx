import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {SessionProvider} from 'next-auth/react'
import {ReactElement, ReactNode} from 'react'
import {NextPage} from 'next'
import MainLayout from '@/components/layout/MainLayout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <SessionProvider session={pageProps.session}>
      <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
    </SessionProvider>
  )
}
