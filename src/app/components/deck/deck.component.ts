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
  cartasFiltradas:Card[] = [];
  caminhoImagem:string = 'assets/images/cards/';
  mensagemDiv:boolean=false;
  mensagem:string = 'Deck completo, para adicionar uma nova carta antes é necessário remover alguma.';
  cartaSelecionadaRemover!:Card | undefined;
  cartaSelecionadaAdicionar!:Card | undefined;

  constructor(private usuarioService:UsuarioService){}

  
  ngOnInit(): void {
      this.deck = this.usuarioService.usuario.deck;
      this.cartas = this.usuarioService.usuario.cards;
      
      this.cartas.forEach(carta => {
        const indexCartaRemovida = this.deck.findIndex(card => card.id === carta.id);
        if(indexCartaRemovida==-1){
          this.cartasFiltradas.push(carta);
        }
      });
  }

  trocarCartaRemover(cartaSelecionadaRemover:Card){
    this.cartaSelecionadaRemover = cartaSelecionadaRemover;
    const imagemHtml = document.getElementById(this.cartaSelecionadaRemover.id.toString());
    imagemHtml?.classList.add('brilho');
    this.realizarTroca();
  }
  trocarCartaAdicionar(cartaSelecionadaAdicionar:Card){
    this.cartaSelecionadaAdicionar = cartaSelecionadaAdicionar;
    this.realizarTroca();
  }

  realizarTroca(){
    if(this.cartaSelecionadaRemover && this.cartaSelecionadaAdicionar){
      const indexCartaRemovida = this.deck.findIndex(card => card.id === this.cartaSelecionadaRemover?.id);
      this.deck.splice(indexCartaRemovida, 1, this.cartaSelecionadaAdicionar);
      this.cartasFiltradas.push(this.cartaSelecionadaRemover);
      this.cartasFiltradas = this.cartasFiltradas.filter(card => card.id !== this.cartaSelecionadaAdicionar?.id);
      this.cartaSelecionadaRemover = undefined;
      this.cartaSelecionadaAdicionar = undefined;
      
    }
    else if(this.deck.length<20 && this.cartaSelecionadaAdicionar){
      this.adicionarCartaDeck(this.cartaSelecionadaAdicionar);
      this.cartaSelecionadaAdicionar = undefined;
    }
    this.usuarioService.usuario.deck = this.deck;
    this.usuarioService.salvarUsuario();
  }

  removerCartaDeck(carta:Card){
    const indexCartaRemovida = this.deck.findIndex(card => card.id === carta.id);
    this.cartasFiltradas.push(this.deck.splice(indexCartaRemovida, 1)[0]);
    this.usuarioService.usuario.deck = this.deck;
    this.usuarioService.salvarUsuario();
  }
  adicionarCartaDeck(carta:Card){
    const indexCartaAdicionada = this.deck.findIndex(card => card.id === carta.id);
    if(indexCartaAdicionada==-1){
      if(this.deck.length<20){
        const indexCartaAdicionada2 = this.cartasFiltradas.findIndex(card => card.id === carta.id);
        this.deck.push(this.cartasFiltradas.splice(indexCartaAdicionada2, 1)[0]);
        this.usuarioService.usuario.deck = this.deck;
      }
      else if(this.deck.length>=20){
        this.mensagemDiv=true;
        setTimeout(()=> {
          this.mensagemDiv = false;
        }, 2000)
      }
    }
  }

  removerTodas(){
    this.cartasFiltradas.push(...this.deck.splice(0, this.deck.length));
    this.usuarioService.usuario.deck = this.deck;
    this.usuarioService.salvarUsuario();
  }

  fecharDialogo(){
    this.mensagemDiv = false;
  }



}
