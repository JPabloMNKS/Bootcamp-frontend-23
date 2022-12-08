var Pokemon =  class Pokemon {
  constructor(name, typeOfPokemon, evolutions, life) {
    this._name = name;
    this._typeOfPokemon = typeOfPokemon;
    this._evolutions = evolutions;
    this._life = life;
  }

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

  set name(pokemonName) {
    this._name = pokemonName;
  }

  set typeOfPokemon(type) {
    this._typeOfPokemon = type;
  }

  set evolutions(evolutions) {
    this._evolutions = evolutions;
  }

  set life(life) {
    this._life = life;
  }

  attack(otherPokemon) {
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

exports.default = Pokemon;