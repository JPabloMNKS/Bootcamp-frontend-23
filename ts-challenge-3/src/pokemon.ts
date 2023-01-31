import { checkPowerPoint } from './utils/decorators';
import { Move, PokemonData } from './utils/types';
import { getRandomNumber } from './utils/util';

const MAX_NUMBER_OF_PP_PER_POKEMON = 5;
const PP_USED = 1;

export class Pokemon {
  id: number;
  name: string;
  ppAvailable: number;

  constructor(pokemonData: PokemonData) {
    this.id = pokemonData.id;
    this.name = pokemonData.name;
    this.ppAvailable = getRandomNumber(MAX_NUMBER_OF_PP_PER_POKEMON);
  }

  @checkPowerPoint()
  figth(move: Move) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= PP_USED;
  }
}
