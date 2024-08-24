import { Injectable } from '@angular/core';
import { Treinador } from '../model/treinador';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class BatalhaService {
  treinadorAtual?:Treinador;

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
    return this.treinadorAtual = this.gerarTreinadorProfessor('Fácil');
  }

  gerarTreinadorShadow(dificuldade:String):Treinador{
    return this.treinadorAtual = {
      nome: 'Shadow',
      dificuldade: ''+dificuldade+'',
      deck: this.cardService.deckFacilAleatorio(),
      imagem: 'shadow.png',
      dica: 'Treinadores shadow só utilizam cartas comuns com menos de 100 pontos.'
    };
  }
  gerarTreinadorProfessor(dificuldade:string){
    return this.treinadorAtual = {
      nome: 'Professor OAK',
      dificuldade: ''+dificuldade+'',
      deck: this.cardService.deckFacilAleatorio(),
      imagem: 'professor.png',
      dica: 'O professor não possui cartas muito fortes, seu foco está no laboratório.'
    };
  }

}
