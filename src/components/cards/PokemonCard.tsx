import Link from 'next/link';
import * as React from 'react';
import useSWR from 'swr';

import NextImage from '@/components/NextImage';

import { fetcher } from '@/helpers';
import { Pokemon, PokemonListItem } from '@/interfaces';

const PokemonCard = ({ name, url }: PokemonListItem): JSX.Element => {
  const { data: pokemon } = useSWR<Pokemon>(url, fetcher, { suspense: true });

  return (
    <Link href={`/pokemon/${name}`} passHref>
      <div className='flex overflow-hidden relative flex-col justify-center p-4 max-w-sm rounded shadow-lg hover:transition-transform hover:duration-100 hover:scale-110 hover:cursor-pointer'>
        <p className='flex absolute top-1 right-4 justify-center items-center w-10 h-10 bg-pink-300 rounded-full'>
          #{pokemon?.order}{' '}
        </p>
        {pokemon?.sprites.front_default ? (
          <NextImage
            src={pokemon?.sprites.front_default}
            alt='Pokemon'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
          />
        ) : (
          'No photo'
        )}
        <p className='capitalize'>{pokemon?.name}</p>
        {pokemon?.stats.slice(0, 3).map(({ stat, base_stat }) => (
          <p key={stat.name}>
            {stat.name}: {base_stat}
          </p>
        ))}
      </div>
    </Link>
  );
};

export default PokemonCard;
