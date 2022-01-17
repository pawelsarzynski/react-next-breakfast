import { useRouter } from 'next/router';
import useSWR from 'swr';

import Footer from '@/components/Footer/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import MoveListItem from '@/components/listItems/MoveListItem';
import TypeListItem from '@/components/listItems/TypeListItem';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Spinner from '@/components/Spinner/Spinner';

import { fetcher } from '@/helpers';
import { Pokemon, PokemonType } from '@/interfaces';
import { POKEMON_TYPE_TO_COLOR } from '@/shared/constants';
import { useAuth } from '@/shared/hooks';

const Pokemon = () => {
  useAuth();
  const router = useRouter();
  const { name } = router.query;
  const { data: pokemon, error } = useSWR<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}/`,
    fetcher
  );

  if (!pokemon) return <Spinner />;

  return (
    <Layout>
      <Seo templateTitle={pokemon.name ?? name?.toString()} />
      <main className='max-w-screen min-h-screen max-h-screen'>
        <section className='flex flex-col items-center p-4 w-full bg-white'>
          <ArrowLink
            className='absolute top-2 left-2 w-5 h-5'
            href='/'
            direction='left'
          />
          <div className='p-1 text-6xl font-bold text-center text-pink-300 capitalize'>
            {pokemon.name}
          </div>
          <div
            className={
              'w-2/4 border-pink-500 border-2 m-1 rounded-xl bg-gradient-to-r from-' +
              POKEMON_TYPE_TO_COLOR[
                (pokemon?.types[0].type.name as PokemonType) ??
                  POKEMON_TYPE_TO_COLOR.normal
              ] +
              ' to-white'
            }
          >
            <NextImage
              src={pokemon.sprites.front_default}
              alt='Pokemon'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <div className='flex relative mt-4 mb-4'>
            <p className='top-[-16px] absolute left-0'>Types:</p>
            {pokemon.types.map(({ type }, index) => (
              <TypeListItem key={index} url={type.url} />
            ))}
          </div>
          <div className='flex relative flex-wrap max-w-full'>
            <p className='top-[-16px] absolute left-0'>Moves:</p>
            {pokemon.moves.map(({ move }, index) => (
              <MoveListItem key={index} url={move.url} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </Layout>
  );
};

export default Pokemon;
