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
  batalhaRepetida!:number;
  ligaAmadora:boolean = false;

  constructor(private cardService:CardService) { }

  batalhar(numeroDaBatalha:number):Treinador{
    switch(numeroDaBatalha){
      case 1:
      return this.batalha1();
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

      case 14:
      return this.batalha14();
      break;

      case 15:
      return this.batalha15();
      break;

      case 16:
      return this.batalha16();
      break;

      case 17:
      return this.batalha17();
      break;

      case 18:
      return this.batalha18();
      break;

      case 19:
      return this.batalha19();
      break;

      case 20:
      return this.batalha20();
      break;

      case 21:
      return this.batalha21();
      break;

      case 22:
      return this.batalha22();
      break;

      case 23:
      return this.batalha23();
      break;

      case 24:
      return this.batalha24();
      break;

      case 25:
      return this.batalha25();
      break;

      case 26:
      return this.batalha26();
      break;

      case 27:
      return this.batalha27();
      break;

      case 28:
      return this.batalha28();
      break;

      case 29:
      return this.batalha29();
      break;

      case 30:
      return this.batalha30();
      break;

      case 31:
      return this.batalha31();
      break;

      default:
        return this.batalha32();
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
    return this.treinadorAtual = this.gerarLiderDeGinasio('Falkner', 'Voador', 'falkner.png', 'Este é o líder do ginásio de voadores.');
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
  batalha14(){
    return this.treinadorAtual = this.gerarJessie();
  }
  batalha15(){
    return this.treinadorAtual = this.gerarJames();
  }
  batalha16(){
    this.ligaAmadora = true;
    return this.treinadorAtual = this.gerarLigaPokemonAmadora('Chuck', 'chuck.png');
  }
  batalha17(){
    this.ligaAmadora = true;
    return this.treinadorAtual = this.gerarLigaPokemonAmadora('Dawn', 'dawn.png');
  }
  batalha18(){
    this.ligaAmadora = true;
    return this.treinadorAtual = this.gerarLigaPokemonAmadora('Serena', 'serena.png');
  }
  batalha19(){
    this.ligaAmadora = true;
    return this.treinadorAtual = this.gerarLigaPokemonAmadora('Kiawe', 'kiawe.png');
  }
  batalha20(){
    this.ligaAmadora = true;
    return this.treinadorAtual = this.gerarOponenteDificil('Gary', 'gary.png');
  }
  batalha21(){
    return this.treinadorAtual = this.gerarOponenteDificil('Jessie & James', 'jessiejames.png');
  }
  batalha22(){
    return this.treinadorAtual = this.gerarTreinadorEliteFour('Lorelei', 'lorelei.png', 'A lenda diz que Lorelei possui um dos cães lendários.');
  }
  batalha23(){
    return this.treinadorAtual = this.gerarTreinadorEliteFour('Bruno', 'bruno.png', 'Caso não esteja conseguindo avançar, batalhe com Lorelei na aba "treinadores" para obter mais lendárias.');
  }
  batalha24(){
    return this.treinadorAtual = this.gerarTreinadorEliteFour('Agatha', 'agatha.png', 'Caso não esteja conseguindo avançar, batalhe com Lorelei na aba "treinadores" para obter mais lendárias.');
  }
  batalha25(){
    return this.treinadorAtual = this.gerarTreinadorEliteFour('Lance', 'lance.png', 'Lance é o treinador com mais lendários do clã voador');
  }
  batalha26(){
    return this.treinadorAtual = this.gerarOponenteLendario('Steven', 'steven.png', 'Na liga mundial só há lendários.');
  }
  batalha27(){
    return this.treinadorAtual = this.gerarOponenteLendario('Diantha', 'diantha.png', 'Na liga mundial só há lendários.');
  }
  batalha28(){
    return this.treinadorAtual = this.gerarOponenteLendario('Cynthia', 'cynthia.png', 'Na liga mundial só há lendários.');
  }
  batalha29(){
    return this.treinadorAtual = this.gerarOponenteLendario('Leon', 'leon.png', 'Na liga mundial só há lendários.');
  }
  batalha30(){
    return this.treinadorAtual = this.gerarAsh();
  }
  batalha31(){
    return this.treinadorAtual = this.gerarGiovanni();
  }
  batalha32(){
    return this.treinadorAtual = this.gerarOponenteLendario('Ash Ketchum', 'ash.png', 'Você finalizou o modo campanha, Parabéns!');
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
  gerarLigaPokemonAmadora(nome:string, imagem:string){
    return this.treinadorAtual = {
      nome: nome,
      dificuldade: 'Médio',
      deck: this.cardService.deckMedioAleatorio(),
      imagem: imagem,
      dica: 'A liga pokémon não libera dicas. Seus participantes normalmente possuem uma vasta quantidade de pokémons.'
    };
  }
  gerarOponenteDificil(nome:string, imagem:string){
    return this.treinadorAtual = {
      nome: nome,
      dificuldade: 'Difícil',
      deck: this.cardService.deckDificilAleatorio(),
      imagem: imagem,
      dica: 'A liga pokémon não libera dicas. Seus participantes normalmente possuem uma vasta quantidade de pokémons.'
    };
  }
  gerarTreinadorEliteFour(nome:string, imagem:string, dica:string){
    return this.treinadorAtual = {
      nome: nome,
      dificuldade: 'lendário',
      deck: this.cardService.deckEliteFour(nome),
      imagem: imagem,
      dica: dica
    };
  }

  gerarJessie(){
    return this.treinadorAtual = {
      nome: 'Jessie',
      dificuldade: 'Médio',
      deck: this.cardService.deckJessie(),
      imagem: 'jessie.png',
      dica: 'Jessie adora Wobbufet.'
    };
  }
  gerarJames(){
    return this.treinadorAtual = {
      nome: 'James',
      dificuldade: 'Médio',
      deck: this.cardService.deckJames(),
      imagem: 'james.png',
      dica: 'Jessie adora Weezing.'
    };
  }

  gerarOponenteLendario(nome:string, imagem:string, dica:string){
    return this.treinadorAtual = {
      nome: nome,
      dificuldade: 'Lendário',
      deck: this.cardService.deckLendarioAleatorio(),
      imagem: imagem,
      dica: dica
    };
  }

  gerarAsh(){
    return this.treinadorAtual = {
      nome: 'Ash Ketchum',
      dificuldade: 'Lendário',
      deck: this.cardService.deckAsh(),
      imagem: 'ash.png',
      dica: 'Esta é a final da Liga Mundial de Pokémon'
    };
  }
  gerarGiovanni(){
    return this.treinadorAtual = {
      nome: 'Giovanni',
      dificuldade: 'Lendário',
      deck: this.cardService.deckGiovanni(),
      imagem: 'giovanni.png',
      dica: 'Giovanni vai dominar o mundo, você é o único que pode impedi-lo.'
    };
  }


}
