export default class Pokemon {
  constructor(
    private _name: string,
    private _typeOfPokemon: string[],
    private _evolutions: number,
    private _life: number
  ) {}

  get name() {
    return this._name;
  }

  get typeOfPokemon() {
    return this._typeOfPokemon;
  }

  get evolutions() {
    return this._evolutions;
  }

  get life() {
    return this._life;
  }

  set name(pokemonName: string) {
    this._name = pokemonName;
  }

  set typeOfPokemon(type: string[]) {
    this._typeOfPokemon = type;
  }

  set evolutions(evolutions: number) {
    this._evolutions = evolutions;
  }

  set life(life: number) {
    this._life = life;
  }

  attack(otherPokemon: Pokemon) {
    return (otherPokemon._life -= 10);
  }

  evolve() {
    this._life += 25;
    return this.evolutions++;
  }

  logStatus() {
    console.log("===== POKEMON CATCH THEM ALL =====");
    console.log(`Name: ${this._name}`);
    console.log(`Type of Pokemon: ${this._typeOfPokemon}`);
    console.log(`Evolution: ${this._evolutions}`);
    console.log(`Life: ${this._life}\n`);
  }
}
