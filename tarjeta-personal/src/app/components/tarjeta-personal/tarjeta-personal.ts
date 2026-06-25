import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-personal',
  imports: [],
  templateUrl: './tarjeta-personal.html',
  styleUrl: './tarjeta-personal.css',
})
export class TarjetaPersonal {
  nombre:string = 'BENJAMÍN ROSSI';
  rol:string =  'Full Stack Developer';
  descripcion:string = '.NET | Angular';
}
