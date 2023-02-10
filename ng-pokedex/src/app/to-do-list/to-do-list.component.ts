import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
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
