import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import { UsuarioService } from '../../services/usuario.service';
import { Card } from '../../model/card';
import { cardEstaNoDeck } from '../../model/cardEstaNoDeck';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  cartas!:Card[];
  cartasDoUsuario!:Card[];
  caminhoImagem:string = 'assets/images/cards/';
  cartasEstaoNoDeck:cardEstaNoDeck[] = [];


  constructor(private cardService:CardService, private usuarioService:UsuarioService){
    this.cartas = this.cardService.cards;
    this.cartasDoUsuario = this.usuarioService.getUsuario().cards;

    this.cartas.forEach(carta => {
  
      if(this.cartasDoUsuario.some(cartaUsuario => cartaUsuario.id === carta.id)){
        const cartaContida:cardEstaNoDeck = {
          card:carta,
          contem:true
        };
        this.cartasEstaoNoDeck.push(cartaContida);
      }
      else{
        const cartaNaoContida:cardEstaNoDeck = {
          card:carta,
          contem:false
        }
        this.cartasEstaoNoDeck.push(cartaNaoContida);
      }

    });

  }

}
