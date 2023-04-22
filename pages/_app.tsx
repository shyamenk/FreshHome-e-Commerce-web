import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import MainLayout from '@/components/layout/MainLayout';

import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { CartProvider } from '@/context/cartContext';
import Footer from '@/components/layout/Footer';

export type NextPageWithLayout<> = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CartProvider>
      <SessionProvider session={pageProps.session}>
        <MainLayout>
          {getLayout(<Component {...pageProps} />)}
          <Footer />
        </MainLayout>
      </SessionProvider>
    </CartProvider>
  );
};

export default App;
