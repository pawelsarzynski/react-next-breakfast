export interface Pokemon {
  name: string;
  order: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: PokemonType;
      url: string;
    };
  }[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export type PokemonType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';
