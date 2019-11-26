import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent {

  cursos: string[] = ['TypeScript', 'JavaScript', 'JavaEE', 'C#', 'PHP']
  habilitar: boolean = true;
  constructor() { }

  switchVisibilityOfList(): void {
    this.habilitar = !this.habilitar;
  }

}
