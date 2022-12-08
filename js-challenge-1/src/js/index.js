var Pokemon = require("./pokemon");

pikachu = new Pokemon.default("Pikachu", ["Electricity"], 1, 100);

bulbasaur = new Pokemon.default("Bulbasaur", ["Electricity"], 1, 100);

bulbasaur.attack(pikachu);
bulbasaur.evolve();

bulbasaur.logStatus();
pikachu.logStatus();