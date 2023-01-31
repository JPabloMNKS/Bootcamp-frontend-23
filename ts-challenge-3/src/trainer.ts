import { getPokemonsIds } from './utils/decorators';
import { Pokemon } from './pokemon';
import { getPokemonFromAPI } from './utils/pokeapi';

const NUMBER_OF_POKEMONS_PER_TRAINER = 3;

export class Trainer {
  trainerName: string;
  pokemons: Pokemon[] = [];
  @getPokemonsIds(NUMBER_OF_POKEMONS_PER_TRAINER)
  listOfPokemonIds: number[];

  constructor(trainerName: string) {
    this.trainerName = trainerName;
  }

  async getPokemons() {
    const listOfPokemons = this.listOfPokemonIds.map((PokemonID) =>
      getPokemonFromAPI(PokemonID)
    );
    await Promise.all(listOfPokemons).then((results) => {
      results.forEach((result) => {
        this.pokemons.push(new Pokemon(result.data));
      });
    });
  }

  async toString() {
    await this.getPokemons();
    this.pokemons.sort((a, b) => a.id - b.id);
    console.log(`Trainer: ${this.trainerName} \n\thave this pokemons \n`);

    this.pokemons.forEach((pokemon) => {
      console.log(pokemon);
    });
  }
}
