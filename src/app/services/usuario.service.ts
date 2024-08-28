import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Card } from '../model/card';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario!:Usuario;
  
  constructor(private router:Router) {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString) as Usuario;
    }
    else{
      this.router.navigate(['/cadastro']);
    }
   }


  getUsuario():Usuario{
    return this.usuario;
  }
  setDeck(deck:Card[]){
    this.usuario.deck = deck;
  }
  addNovaCarta(card:Card){
    if (!this.getUsuario().cards.some(carta => carta.id === card.id)) {
      this.usuario?.cards.push(card);
    }
  }
  getTamanhoDeck(){
    return this.usuario.deck.length;
  }
}
