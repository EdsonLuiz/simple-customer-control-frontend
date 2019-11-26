import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente-app';
  curso: string = 'Curso Spring 5 com angular 8';
  professor: string = 'Edson Luiz'
}
