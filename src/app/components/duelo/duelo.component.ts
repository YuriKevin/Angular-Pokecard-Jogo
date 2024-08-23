import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-duelo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './duelo.component.html',
  styleUrl: './duelo.component.css'
})
export class DueloComponent {
  inicioDiv:boolean = false;
  jogadaDiv:boolean = false;
  mostrarCartas:boolean = false;
  terminoPartida:boolean = false;
  venceu:boolean = false;
  perdeu:boolean = false;
  abrirCarta:boolean = false;


}
