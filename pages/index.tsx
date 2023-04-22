import Head from 'next/head';
// import {Inter} from '@next/font/google'
import Hero from '@/components/layout/HeroSection';
import Feature from '@/components/layout/CategoryList';

// TODO: ADD NEXT FONTS to AVOID Layout Shift

// const inter = Inter({subsets: ['latin']})

const Home = () => {
  return (
    <>
      <Head>
        <title>Fresh Home | E-Commerce</title>
        <meta name="FreshHome" content="E-commerce Web Application " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <Feature />
    </>
  );
};

export default Home;
// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <MainLayout>
//       <>{page}</>
//     </MainLayout>
//   )
// }
