const MAX_ID = 25;

type Move = {
  name: string;
  power: number;
};

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
    let value = Array.from({ length }, () => getRandomNumber());

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

function getRandomNumber() {
  return Math.floor(Math.random() * MAX_ID) + 1;
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
  pokemons: Pokemon[];
  @getPokemonsIds(3)
  listOfPokemonIds: number[];

  constructor(pokemons: Pokemon[]) {
    this.pokemons = pokemons;
  }
}

const move: Move = { name: 'thunderbolt', power: 90 };
const pikachu = new Pokemon(1, 'pikachu', 1);
pikachu.figth(move);
pikachu.figth(move);
