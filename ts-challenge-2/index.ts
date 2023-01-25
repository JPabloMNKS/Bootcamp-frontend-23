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

class Pokemon {
  name: string;
  ppAvailable: number;
  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }

  @checkPowerPoint()
  figth(move: Move) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }
}

const move: Move = { name: 'thunderbolt', power: 90 };
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move);
