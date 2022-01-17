import * as React from 'react';
import useSWR from 'swr';

import clsxm from '@/lib/clsxm';

import Spinner from '@/components/Spinner/Spinner';

import { fetcher } from '@/helpers';
import { Type } from '@/interfaces';
import { POKEMON_TYPE_TO_COLOR } from '@/shared/constants';

interface TypeListItemProps {
  url: string;
}

const TypeListItem = ({ url }: TypeListItemProps): JSX.Element => {
  const { data: type, error } = useSWR<Type>(url, fetcher);

  if (!type) return <Spinner />;

  return (
    <div
      className={clsxm(
        type.name && `bg-${POKEMON_TYPE_TO_COLOR[type.name]}`,
        'p-1 p-3 m-1 rounded-xl border-2 border-black'
      )}
    >
      {type.name}
    </div>
  );
};

export default TypeListItem;
