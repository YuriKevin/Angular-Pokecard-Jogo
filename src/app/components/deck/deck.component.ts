import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Card } from '../../model/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.css'
})
export class DeckComponent implements OnInit{
  deck!:Card[];
  cartas!:Card[];
  caminhoImagem:string = 'assets/images/cards/';

  constructor(private usuarioService:UsuarioService){}

  
  ngOnInit(): void {
      this.deck = this.usuarioService.usuario.deck;
      this.cartas = this.usuarioService.usuario.cards;
  }

}
