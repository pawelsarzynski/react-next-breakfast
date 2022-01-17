import { PokemonType } from '@/interfaces';

export interface Move {
  name: string;
  power?: number;
  type: {
    name: PokemonType;
  };
}
