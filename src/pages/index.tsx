import * as React from 'react';

import ErrorBoundary from '@/components/ErrorBoundary/ErroBoundary';
import Footer from '@/components/Footer/Footer.client';
import Layout from '@/components/layout/Layout';
import PokemonList from '@/components/lists/PokemonList';
import Search from '@/components/Search/Search';
import Seo from '@/components/Seo';
import Spinner from '@/components/Spinner/Spinner';

export default function HomePage() {
  const [search, setSearch] = React.useState('');
  const [hash, setHash] = React.useState(0);
  const [isPending, startTransition] = React.useTransition();

  const handleSetSearch = (query: string): void => {
    setSearch(query);

    // block thread
    // const numDivs = 5000;
    // const delay = 1;
    // startTransition(() => {
    //   for (let i = 1; i <= numDivs; i++) {
    //     setTimeout(function () {
    //       setHash(i);
    //     }, delay * i);
    //   }
    // })
  };

  return (
    <ErrorBoundary>
      <Layout>
        <Seo />
        <main className='min-h-screen max-h-screen'>
          <header>
            <Search value={search} onChange={handleSetSearch} />
          </header>
          <p>{isPending ? 'Rendering...' : hash}</p>
          <section className='relative bg-white'>
            <div className='layout flex flex-col justify-center items-center text-center'>
              <React.Suspense fallback={<Spinner />}>
                <PokemonList searchPhrase={search} />
              </React.Suspense>
              <Footer />
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
}
