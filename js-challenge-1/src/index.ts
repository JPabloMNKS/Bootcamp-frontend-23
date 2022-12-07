import Pokemon from "./pokemon";


const pikachu = new Pokemon("Pikachu", ["Electricity"], 1, 100);

const bulbasaur = new Pokemon("Bulbasaur", ["Electricity"], 1, 100);

bulbasaur.attack(pikachu);
bulbasaur.evolve();

bulbasaur.logStatus();
pikachu.logStatus();