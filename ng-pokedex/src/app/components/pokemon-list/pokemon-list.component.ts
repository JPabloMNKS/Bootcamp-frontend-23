import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  nuevaTarea: string = '';
  listaTareas: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  crearTarea() {
    this.listaTareas.push(this.nuevaTarea);
    this.nuevaTarea = '';
    console.log(this.listaTareas);
  }
}
