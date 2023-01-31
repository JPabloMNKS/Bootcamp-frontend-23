import axios from 'axios';

export function getPokemonFromAPI(pokemonID: number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
}
