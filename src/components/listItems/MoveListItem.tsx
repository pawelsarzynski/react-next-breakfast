import * as React from 'react';
import useSWR from 'swr';

import Spinner from '@/components/Spinner/Spinner';

import { fetcher } from '@/helpers';
import { Move } from '@/interfaces';
import { POKEMON_TYPE_TO_COLOR } from '@/shared/constants';

interface MoveListItemProps {
  url: string;
}

const MoveListItem = ({ url }: MoveListItemProps): JSX.Element => {
  const { data: move, error } = useSWR<Move>(url, fetcher);

  if (!move) return <Spinner />;

  return (
    <div
      className={`border-black border-2 m-1 p-1 rounded-xl flex flex-row justify-between px-1 bg-gradient-to-r from-${
        POKEMON_TYPE_TO_COLOR[move.type.name]
      } to-white min-w-max p-3 gap-2`}
    >
      <div>{move.name}</div>
      <div className='text-red-400'>
        {move.power ? `${move.power}dmg` : '--'}
      </div>
    </div>
  );
};

export default MoveListItem;
