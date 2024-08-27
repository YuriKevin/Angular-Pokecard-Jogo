import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { BatalhaService } from '../../services/batalha.service';
import { Treinador } from '../../model/treinador';
import { UsuarioService } from '../../services/usuario.service';
import { Card } from '../../model/card';
import { Usuario } from '../../model/usuario';
import { CardService } from '../../services/card.service';
import { Router, RouterModule } from '@angular/router';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-duelo',
  standalone: true,
  imports: [CommonModule, RouterModule, DialogoComponent],
  templateUrl: './duelo.component.html',
  styleUrl: './duelo.component.css'
})
export class DueloComponent implements OnInit{
  inicioDiv:boolean = true;
  jogadaDiv:boolean = false;
  fecharBackgroundDiv:boolean = false;
  mostrarCartas:boolean = false;
  terminoPartida:boolean = false;
  venceu:boolean = false;
  perdeu:boolean = false;
  abrirCartaDiv:boolean = false;
  novaCartaCaminho:string = "assets/images/cards/card.png";
  caminhoImagemOponente:string = '';
  caminhoImagemUsuario:string = '';
  cartasDisponiveis:Card[] = [];
  indiceCartasDisponiveis:number = 0;
  indiceCartasOponente:number = 0;
  indiceCartasUsuario:number = 6;
  pontosUsuario:number = 0;
  pontosOponente:number = 0;
  cardOponente!:Card;
  caminhoCardOponente:string = "assets/images/cards/card.png";
  caminhoCardUsuario:string = "assets/images/cards/card.png";
  usuario!:Usuario;
  oponente!:Treinador;
  ajudaUtilizada:boolean = false;
  dialogoDiv:boolean = false;
  numeroBatalha!:number;
  batalhaRepetida!:number;
  ligaAmadora!:boolean;

  vantagem: { [key: string]: string[] } = {
    Elétrico: ['Água', 'Voador'],
    Grama: ['Água', 'Elétrico'],
    Fogo: ['Metal', 'Grama'],
    Água: ['Voador', 'Fogo'],
    Psiquico: ['Lutador', 'Fogo'],
    Lutador: ['Metal', 'Elétrico'],
    Metal: ['Psiquico', 'Sombrio'],
    Sombrio: ['Psiquico'],
    Voador: ['Lutador', 'Grama']
  };

  constructor(private batalhaService:BatalhaService, private usuarioService:UsuarioService, private cardService:CardService, private el: ElementRef, private router: Router){
    
  }

  ngOnInit(): void {
    if(this.usuarioService.getTamanhoDeck()<20){
      this.router.navigate(['/campanha']);
    }
      this.usuario = this.usuarioService.getUsuario();
      this.batalhaRepetida = this.batalhaService.batalhaRepetida;
      if(this.batalhaRepetida && this.batalhaRepetida!=0){
        this.numeroBatalha = this.batalhaRepetida;
      }
      else{
        this.numeroBatalha = this.usuario.batalhaAtual;
      }
      this.cartasDisponiveis = this.usuario.deck.slice(0, 6);
      this.oponente = this.batalhaService.batalhar(this.numeroBatalha);
      const caminhoBase = 'assets/images/personagens/';
      const nomeImagem = this.oponente.imagem || 'shadow.png';
      this.caminhoImagemOponente = `${caminhoBase}${nomeImagem}`;
      this.caminhoImagemUsuario = `${caminhoBase}${this.usuario.imagem}`;

      setTimeout(( ) => {
        this.inicioDiv = false;
        this.dialogoDiv = true;
      }, 4000)
      this.ligaAmadora = this.batalhaService.ligaAmadora;
  }
  

  cartaEscolhida(cartaEscolhida:Card){
    if(this.pontosOponente == 7 || this.pontosUsuario ==7){
      return;
    }
    this.jogadaDiv = true
    if(this.indiceCartasDisponiveis > this.usuario.deck.length){
      this.indiceCartasOponente = 0;
    }
    if(this.indiceCartasUsuario > this.oponente.deck.length){
      this.indiceCartasUsuario = 0;
    }
    this.cardOponente = this.oponente.deck[this.indiceCartasOponente];

    setTimeout(() => {
      this.caminhoCardOponente = "assets/images/cards/"+this.cardOponente.imagem;
      this.caminhoCardUsuario = "assets/images/cards/"+cartaEscolhida.imagem;
      let resultado = this.compararCartas(this.oponente.deck[this.indiceCartasOponente], cartaEscolhida);
      
      if (resultado) {
        this.pontosUsuario++;
        const cardVencedor = document.getElementById('cardUsuario');
        cardVencedor?.classList.remove('brilho-branco')
        cardVencedor?.classList.add('venceu');
        const cardPerdedor = document.getElementById('cardOponente');
        cardPerdedor?.classList.remove('brilho-branco')
        cardPerdedor?.classList.add('perdeu');

        if (this.pontosUsuario === 7) {
          setTimeout(() => {
            this.jogadaDiv=false;
            this.terminoPartida=true;
            this.venceu=true;
            if(!this.batalhaRepetida){
              this.usuario.batalhaAtual+=1;
              console.log("pontuação:"+this.usuario.batalhaAtual);
            }
            else{
              this.batalhaService.batalhaRepetida = 0;
            }
          }, 3000);
        }
      } 
      else {
        this.pontosOponente++;
        if (this.pontosOponente === 7) {
          setTimeout(() => {
            this.jogadaDiv=false;
            this.terminoPartida=true;
            this.perdeu=true;
          }, 4000);
          if(this.ligaAmadora && !this.batalhaRepetida){
              this.usuario.batalhaAtual = 16;
          }
        }
      }
      this.indiceCartasOponente++;
      this.indiceCartasUsuario++;
      this.fecharBackgroundDiv = true;
      
      
    }, 2000);
    const indiceCartaEscolhida = this.cartasDisponiveis.findIndex(carta => carta.id === cartaEscolhida.id);
    this.cartasDisponiveis[indiceCartaEscolhida] = this.usuario.deck[this.indiceCartasUsuario];
    this.caminhoCardOponente = "assets/images/cards/card.png";
    this.caminhoCardUsuario = "assets/images/cards/card.png";
}
  compararCartas(cartaOponente:Card, cartaUsuario:Card):boolean{
    if(cartaOponente.raridade ==  "Lendária" && cartaUsuario.raridade !="Lendária"){
      return false
    }
    else if(cartaOponente.raridade !=  "Lendária" && cartaUsuario.raridade =="Lendária"){
      return true
    }
    else{
      if(cartaOponente.elemento == cartaUsuario.elemento){
          return this.compararForcaCarta(cartaOponente, cartaUsuario);
      }
      else {
        const vantagemOponente = this.vantagem[cartaOponente.elemento] || [];
        const vantagemUsuario = this.vantagem[cartaUsuario.elemento] || [];
        
        if (vantagemOponente.includes(cartaUsuario.elemento)) {
          return false;
        } 
        else if (vantagemUsuario.includes(cartaOponente.elemento)) {
          return true;
        } 
        else {
          return this.compararForcaCarta(cartaOponente, cartaUsuario);
        }
      }
    }
  }

  compararForcaCarta(cartaOponente:Card, cartaUsuario:Card):boolean{
    if(cartaOponente.forca > cartaUsuario.forca){
      return false;
    }
    else if(cartaOponente.forca < cartaUsuario.forca){
      return true
    }
    else{
      return false;
    }
  }
  abrirCarta(){
    this.terminoPartida = false;
    this.jogadaDiv = false;
    this.abrirCartaDiv = true;
    const card:Card = this.cardService.novaCarta(this.oponente.dificuldade);
    setTimeout(()=>{
      this.novaCartaCaminho = "assets/images/cards/"+card.imagem;
    },5000);
    
  }

  fecharBackground(){
    this.jogadaDiv = false;
    this.fecharBackgroundDiv = false;
  }

  ajuda(){
    if(this.ajudaUtilizada==false){
      this.ajudaUtilizada = true;
    }
    this.cartaEscolhida(this.cardService.cartaAjuda);
  }

}
