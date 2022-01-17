import * as React from 'react';
import useSWR, { Middleware } from 'swr';

import clsxm from '@/lib/clsxm';

import { fetcher } from '@/helpers';
import { Type } from '@/interfaces';
import { POKEMON_TYPE_TO_COLOR } from '@/shared/constants';

interface TypeListItemProps {
  url: string;
}

const sleepMiddleware: Middleware = (useSWRNext) => {
  return (key, _, config) => {
    const sleepFetcher = (...args: [Request]) =>
      fetch(...args).then(async (res) => {
        await new Promise((r) => setTimeout(() => r(0), 5000));
        return res.json();
      });

    const swr = useSWRNext(key, sleepFetcher, config);

    return swr;
  };
};

const TypeListItem = ({ url }: TypeListItemProps): JSX.Element => {
  const { data: type } = useSWR<Type>(url, fetcher, {
    suspense: true,
    use: [sleepMiddleware],
  });

  return (
    <div
      className={clsxm(
        type?.name && `bg-${POKEMON_TYPE_TO_COLOR[type.name]}`,
        'p-1 p-3 m-1 rounded-xl border-2 border-black'
      )}
    >
      {type?.name}
    </div>
  );
};

export default TypeListItem;
