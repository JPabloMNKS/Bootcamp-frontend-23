import axios from 'axios';

const MAX_ID = 25;

type Move = {
  name: string;
  power: number;
};

function getPokemon(pokemonID: number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
}

function checkPowerPoint() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any) {
      if (this.ppAvailable <= 0) {
        console.log(
          `${this.name} doesn't have enough PP to use ${args[0]?.name}!`
        );
        return;
      }
      original.apply(this, args);
    };
  };
}

function getPokemonsIds(length: number) {
  return function (target: any, propertyKey: string) {
    let value = Array.from({ length }, () => getRandomNumber(MAX_ID));

    const getter = function () {
      return value;
    };

    const setter = function (newValue: number[]) {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

function getRandomNumber(maxRandomNumber: number) {
  return Math.floor(Math.random() * maxRandomNumber) + 1;
}

class Pokemon {
  id: number;
  name: string;
  ppAvailable: number;
  constructor(id: number, name: string, ppAvailable: number) {
    this.id = id;
    this.name = name;
    this.ppAvailable = ppAvailable;
  }

  @checkPowerPoint()
  figth(move: Move) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }
}

class Trainer {
  trainerName: string;
  pokemons: Pokemon[] = [];
  @getPokemonsIds(3)
  listOfPokemonIds: number[];

  constructor(trainerName: string) {
    this.trainerName = trainerName;
  }

  async getPokemons() {
    const listOfPokemons = this.listOfPokemonIds.map((PokemonID) =>
      getPokemon(PokemonID)
    );
    const results = await Promise.all(listOfPokemons);
    results.forEach((result) => {
      this.pokemons.push(
        new Pokemon(result.data.id, result.data.name, getRandomNumber(5))
      );
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

const pepeJunior = new Trainer('Pepe Junior');
pepeJunior.toString();

// const move: Move = { name: 'thunderbolt', power: 90 };
// const pikachu = new Pokemon(1, 'pikachu', 1);
// pikachu.figth(move);
// pikachu.figth(move);
