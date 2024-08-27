import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogoService {
  dialogo!:string[];

  constructor() { }

  retornarDialogoBatalha(numeroBatalha:number):string[]{
    this.dialogo = [];
    switch(numeroBatalha){
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

      default:
        return this.batalha1();
    }
  }

  batalha1():string[]{
    return this.dialogo;
  }
  batalha2():string[]{
    return this.dialogo;
  }
  batalha3():string[]{
    return this.dialogo;
  }
  batalha4():string[]{
    this.dialogo.push('Olha só! Pelo visto você venceu os 3 Shadow\'s...')
    this.dialogo.push('Vamos ver se você está forte o suficiente para prosseguir sua jornada.')
    return this.dialogo;
  }
  batalha5():string[]{
    this.dialogo.push('Então você vai desafiar todos os líderes de ginásio?!');
    this.dialogo.push('Acho que você vai longe com essa coragem. Vamos começar!');
    return this.dialogo;
  }
  batalha6():string[]{
    this.dialogo.push('Olá! Eu sou a Misty!');
    this.dialogo.push('Vamos ver do que você é capaz.');
    return this.dialogo;
  }
  batalha7():string[]{
    this.dialogo.push('Brock e Misty sempre muito gentis...');
    this.dialogo.push('Você deveria voltar para atrás antes que as chamas dos meus pokémons te queimem.');
    return this.dialogo;
  }
  batalha8():string[]{
    this.dialogo.push('Ora ora!');
    this.dialogo.push('O professor deve ter visto potencial em você.');
    this.dialogo.push('Além do mais, a maioria dos treinadores desistem quando escutam as ofensas do velho treinador do ginásio do fogo...');
    return this.dialogo;
  }
  batalha9():string[]{
    this.dialogo.push('Sem conversa. Vamos batalhar.');
    return this.dialogo;
  }
  batalha10():string[]{
    this.dialogo.push('Espero que sua mente seja forte.');
    this.dialogo.push('Pokémons psiquicos podem te manipular.');
    return this.dialogo;
  }
  batalha11():string[]{
    this.dialogo.push('VIVA A ELETRICIDADE!');
    this.dialogo.push('Se você quer chegar longe nessa jornada, vá pelo caminho dos elétricos. HAHAHA!');
    return this.dialogo;
  }
  batalha12():string[]{
    this.dialogo.push('Eu sou a Jasmine!');
    this.dialogo.push('Você deve ser um bom treinador, poucos chegam até aqui.');
    this.dialogo.push('Vamos nessa?');
    return this.dialogo;
  }
  batalha13():string[]{
    this.dialogo.push('Trema de medo, o tempo sombrio chegou.');
    this.dialogo.push('Deste ginásio você só passa como um fantasma.');
    return this.dialogo;
  }

  retornarDialogoCampanha(numeroBatalha:number):string[]{
    this.dialogo = [];
    return this.dialogo;
  }

}
