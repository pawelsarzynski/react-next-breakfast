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
  const { data, error } = useSWR<{ results: PokemonListItem[] }>(
    'https://pokeapi.co/api/v2/pokemon/?limit=2000',
    fetcher
  );

  const pokemons = React.useMemo(
    () =>
      data?.results
        .filter(({ name }) => name.includes(searchPhrase))
        .slice(0, 16),
    [data?.results, searchPhrase]
  );

  if (!pokemons) return <Spinner />;

  return (
    <section className='grid grid-cols-4 gap-4 p-4 min-w-full min-h-full'>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.name} {...pokemon} />
      ))}
    </section>
  );
};

export default PokemonList;
