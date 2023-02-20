import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonCardComponent, PokemonListComponent],
  imports: [CommonModule],
  exports: [PokemonCardComponent, PokemonListComponent],
})
export class ComponentsModule {}
