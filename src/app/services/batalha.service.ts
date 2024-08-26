import { Injectable } from '@angular/core';
import { Treinador } from '../model/treinador';
import { CardService } from './card.service';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class BatalhaService {
  treinadorAtual?:Treinador;
  deckGerado!:Card[];
  dica:string = '';

  constructor(private cardService:CardService) { }

  batalhar(numeroDaBatalha:number):Treinador{
    if(numeroDaBatalha==1){
      return this.batalha1();
    }
    else{
      return this.batalha1();
    }
  }

  batalha1():Treinador{
    return this.treinadorAtual = this.gerarTreinadorShadow('Fácil');
  }
  batalha2(){
    return this.treinadorAtual = this.gerarTreinadorShadow('Fácil');
  }
  batalha3(){
    return this.treinadorAtual = this.gerarTreinadorShadow('Fácil');
  }
  batalha4(){
    return this.treinadorAtual = this.gerarTreinadorProfessor();
  }

  gerarTreinadorShadow(dificuldade:String):Treinador{
    if(dificuldade='Fácil'){
      this.deckGerado = this.cardService.deckFacilAleatorio();
      this.dica = 'Este shadow só utiliza cartas comuns com menos de 100 pontos.';
    }
    else if(dificuldade='Médio'){
      this.deckGerado = this.cardService.deckMedioAleatorio();
      this.dica = 'Este shadow utiliza cartas com mais de 100 pontos.';
    }
    else if(dificuldade='Difícil'){
      this.deckGerado = this.cardService.deckDificilAleatorio();
      this.dica = 'Este shadow só utiliza cartas com mais de 170 pontos';
    }
    else{
      this.deckGerado = this.cardService.deckLendarioAleatorio();
      this.dica = 'Este shadow só utiliza cartas lendárias';
    }
    return this.treinadorAtual = {
      nome: 'Shadow',
      dificuldade: ''+dificuldade+'',
      deck: this.deckGerado,
      imagem: 'shadow.png',
      dica: this.dica
    };
  }
  gerarTreinadorProfessor(){
    return this.treinadorAtual = {
      nome: 'Professor OAK',
      dificuldade: 'Fácil',
      deck: this.cardService.deckFacilAleatorio(),
      imagem: 'professor.png',
      dica: 'O professor não possui cartas muito fortes, seu foco está no laboratório.'
    };
  }
  gerarLiderDeGinasioMisty(nome:string, elemento:string, imagem:string, dica:string){
    return this.treinadorAtual = {
      nome: nome,
      dificuldade: 'Médio',
      deck: this.cardService.deckLideresDeGinasio(elemento),
      imagem: imagem,
      dica: dica
    };
  }


}
