import * as React from 'react';

import Footer from '@/components/Footer/Footer';
import Layout from '@/components/layout/Layout';
import PokemonList from '@/components/lists/PokemonList';
import Search from '@/components/Search/Search';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [search, setSearch] = React.useState('');
  const [hash, setHash] = React.useState(0);

  const handleSetSearch = (query: string): void => {
    setSearch(query);
    
    // block thread
    // const numDivs = 5000;
    // const fadeDelay = 1;
    // for (let i=1;i<=numDivs;i++) {
    //   setTimeout(function() {setHash(i)}, fadeDelay*i);
    // }
  }

  return (
    <Layout>
      <Seo />
      <main className='min-h-screen max-h-screen'>
        <header>
          <Search value={search} onChange={handleSetSearch} />
        </header>
        <p>{hash}</p>
        <section className='relative bg-white'>
          <div className='layout flex flex-col justify-center items-center text-center'>
            <PokemonList searchPhrase={search} />
            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
