import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import MainLayout from '@/components/layout/MainLayout';
import { usePageLoading } from '@/hooks/usePageLoading';
import Spinner from '@/components/shared/Spinner';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<> = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { isPageLoading } = usePageLoading();
  const getLayout = Component.getLayout ?? ((page) => page);

  return isPageLoading ? (
    <Spinner />
  ) : (
    <SessionProvider session={pageProps.session}>
      <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
    </SessionProvider>
  );
}
