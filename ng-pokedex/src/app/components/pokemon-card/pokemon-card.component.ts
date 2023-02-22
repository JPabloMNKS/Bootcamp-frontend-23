import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/utils/interfaces/pokemon';


@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input()
  pokemon!: Pokemon;

  constructor() {}
}
