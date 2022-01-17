import * as React from 'react';
import useSWR from 'swr';

import PokemonCard from '@/components/cards/PokemonCard';
import Spinner from '@/components/Spinner/Spinner';

import { fetcher } from '@/helpers';
import { PokemonListItem } from '@/interfaces';

interface PokemonListProps {
  searchPhrase: string;
}

const PokemonList = ({ searchPhrase }: PokemonListProps): JSX.Element => {
  const { data } = useSWR<{ results: PokemonListItem[] }>(
    `${process.env.NEXT_PUBLIC_API_BASE}/pokemon/?limit=2000`,
    fetcher,
    { suspense: true }
  );

  const pokemons = React.useMemo(
    () =>
      data?.results
        .filter(({ name }) => name.includes(searchPhrase))
        .slice(0, 16),
    [data?.results, searchPhrase]
  );

  return (
    <section className='grid grid-cols-4 gap-4 p-4 min-w-full min-h-full'>
      {pokemons?.map((pokemon) => (
        <React.Suspense key={pokemon.name} fallback={<Spinner />}>
          <PokemonCard {...pokemon} />
        </React.Suspense>
      ))}
    </section>
  );
};

export default PokemonList;
