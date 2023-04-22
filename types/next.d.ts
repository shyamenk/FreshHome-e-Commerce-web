import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type NextLayoutComponentType<P> = NextComponentType<
    NextPageContext,
    unknown,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module 'next/app' {
  type AppLayoutProps = AppProps & {
    Component: NextLayoutComponentType;
  };
}
