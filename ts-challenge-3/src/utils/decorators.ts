import { getRandomNumber } from './util';

const MAX_ID = 25;

export function checkPowerPoint() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any) {
      if (this.ppAvailable <= 0) {
        console.log(
          `${this.name} doesn't have enough PP to use ${args?.name}!`
        );
        return;
      }
      original.apply(this, args);
    };
  };
}

export function getPokemonsIds(length: number) {
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
