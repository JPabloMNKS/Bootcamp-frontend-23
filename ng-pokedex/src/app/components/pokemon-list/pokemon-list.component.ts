import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/utils/interfaces/pokemon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pokemonColorMap } from 'src/app/utils/pokemonColorHash';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  listOfPokemonsToDisplay: Pokemon[] = [];
  sorted: boolean = false;
  API = 'https://pokeapi.co/api/v2';
  limit: number = 100;
  offset: number = 0;
  pokemons: Pokemon[] = [];
  searchedPokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.getPokemonList(this.offset, this.limit).subscribe(
      (data: { results: Pokemon[] }) => {
        this.pokemons = this.setPokemonsData(data);
        this.searchedPokemons = this.pokemons;
        this.pokemonsToDisplay(0, 18);
      }
    );
  }

  getPokemonList(offset: number = 0, limit: number = 25) {
    return this.http.get(
      `${this.API}/pokemon/?limit=${limit}&offset=${offset}`
    ) as Observable<{ results: Pokemon[] }>;
  }

  setPokemonsData(data: { results: Pokemon[] }) {
    return data.results.map((pokemon, index) => {
      const id: number = index + 1;
      const backgroundColor = pokemonColorMap[id];
      pokemon.id = id;
      pokemon.image = this.getPokemonImageUri(id);
      pokemon.backroundColor = backgroundColor;
      pokemon.textColor = backgroundColor[1] === 'f' ? '#000' : '#fff';
      return pokemon;
    });
  }

  getPokemonImageUri(id: number) {
    const imageId = ('000' + id).slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }

  pokemonsToDisplay(lowerId: number, higherId: number) {
    this.listOfPokemonsToDisplay = [];
    this.searchedPokemons.forEach((value, index) => {
      if (index >= lowerId && index < higherId)
        this.listOfPokemonsToDisplay.push(value);
    });
  }

  sortByName() {
    if (!this.sorted) {
      this.listOfPokemonsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.listOfPokemonsToDisplay.sort((a, b) => a.id - b.id);
    }
    this.sorted = !this.sorted;
  }
}
