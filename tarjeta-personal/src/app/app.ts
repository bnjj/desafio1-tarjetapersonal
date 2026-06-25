import { Component, signal } from '@angular/core';
import { TarjetaPersonal } from "./components/tarjeta-personal/tarjeta-personal";

@Component({
  selector: 'app-root',
  imports: [TarjetaPersonal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarjeta-personal');
}
