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
    switch(numeroDaBatalha){
      case 1:
      return this.batalha6();
      break;

      case 2:
      return this.batalha2();
      break;

      case 3:
      return this.batalha3();
      break;

      case 4:
      return this.batalha4();
      break;

      case 5:
      return this.batalha5();
      break;

      case 6:
      return this.batalha6();
      break;

      case 7:
      return this.batalha7();
      break;

      case 8:
      return this.batalha8();
      break;

      case 9:
      return this.batalha9();
      break;

      case 10:
      return this.batalha10();
      break;

      case 11:
      return this.batalha11();
      break;

      case 12:
      return this.batalha12();
      break;

      case 13:
      return this.batalha13();
      break;

      default:
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
  batalha5(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Brock', 'Lutador', 'brock.png', 'Este é o líder do ginásio de lutadores.');
  }
  batalha6(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Misty', 'Água', 'misty.png', 'Esta é a líder do ginásio de Água.');
  }
  batalha7(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Blaine', 'Fogo', 'blaine.png', 'Este é o líder do ginásio de fogo.');
  }
  batalha8(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Erica', 'Grama', 'erica.png', 'Esta é a líder do ginásio de grama.');
  }
  batalha9(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Falkner', 'Voador', 'jasmine.png', 'Este é o líder do ginásio de voadores.');
  }
  batalha10(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Sabrina', 'Psiquico', 'sabrina.png', 'Esta é a líder do ginásio psíquico.');
  }
  batalha11(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Lt. Surge', 'Elétrico', 'surge.png', 'Esta é o líder do ginásio Elétrico.');
  }
  batalha12(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Jasmine', 'Metal', 'jasmine.png', 'Esta é a líder do ginásio de metal.');
  }
  batalha13(){
    return this.treinadorAtual = this.gerarLiderDeGinasio('Agatha', 'Sombrio', 'agatha.png', 'Esta é a líder do ginásio sombrio.');
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
  gerarLiderDeGinasio(nome:string, elemento:string, imagem:string, dica:string){
    return this.treinadorAtual = {
      nome: nome,
      dificuldade: 'Médio',
      deck: this.cardService.deckLideresDeGinasio(elemento),
      imagem: imagem,
      dica: dica
    };
  }


}
