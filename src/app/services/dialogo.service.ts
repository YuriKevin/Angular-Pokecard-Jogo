import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogoService {
  dialogo!:string[];
  personagemAtual:string = '';

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
  batalha14():string[]{
    this.dialogo.push('Seu paspalho!');
    this.dialogo.push('O que um moleque feito você faz por essa estrada?');
    this.dialogo.push('Vou te dar duas opções...');
    this.dialogo.push('1. Entregue seus pokémons...');
    this.dialogo.push('2. MORRA!');
    return this.dialogo;
  }
  batalha15():string[]{
    this.dialogo.push('Pelo visto estou um pouco atrasado... ')
    this.dialogo.push('Você derrotou a Jessie então...');
    this.dialogo.push('Vou te dar duas opções...');
    this.dialogo.push('O que?! Ela usou a MINHA frase de efeito?');
    this.dialogo.push('Então uma terceira opção.');
    this.dialogo.push('Morra antes de eu sequestrar seus pokémons!');
    return this.dialogo;
  }
  batalha16():string[]{
    this.dialogo.push('Um novato como você é uma ofensa para a liga.');
    return this.dialogo;
  }
  batalha17():string[]{
    this.dialogo.push('Olá! Feliz em duelar com você!');
    return this.dialogo;
  }
  batalha18():string[]{
    this.dialogo.push('Depois dessa batalha só faltará duas para eu me tornar a próxima campeã da liga amadora!');
    return this.dialogo;
  }
  batalha19():string[]{
    this.dialogo.push('Chegou muito longe...');
    this.dialogo.push('Mas não vai chegar longe o suficiente.');
    this.dialogo.push('ISTO É UMA PARTIDA DE SEMIFINAL!')
    return this.dialogo;
  }
  batalha20():string[]{
    this.dialogo.push('Eu sou o atual campeão da liga amadora.');
    this.dialogo.push('Meu avô me falou de você.');
    this.dialogo.push('Se você perder, voltará pro início da liga...');
    this.dialogo.push('Talvez um dia você fique tão forte quanto eu.');
    this.dialogo.push('Sabe que dia será esse?');
    this.dialogo.push('NO DIA QUE VOCÊ NASCER DE NOVO!');
    this.dialogo.push('VAMOS!');
    return this.dialogo;
  }
  batalha21():string[]{
    this.dialogo.push('Pra proteger o mundo de toda a devastação...');
    this.dialogo.push('Pra unir todas as pessoas em nossa nação...');
    this.dialogo.push('Pra denunciar os males da verdade e do amor...');
    this.dialogo.push('Pra estender nosso poder as estrelas.');
    this.dialogo.push('Eu sou Jessie.');
    this.dialogo.push('E eu sou James!');
    this.dialogo.push('EQUIPE ROCKET DECOLANDO NA VELOCIDADE DA LUZ!');
    this.dialogo.push('Renda-se agora ou prepare-se pra lutar.');
    this.dialogo.push('Da última vez você nos venceu, de lá pra cá muita coisa mudou campeão.');
    this.dialogo.push('E dessa vez as coisas vão ser diferentes.');
    this.dialogo.push('Viemos buscar o seu mais novo troféu...');
    this.dialogo.push('O ENTREGUE!');
    return this.dialogo;
  }

  retornarDialogoCampanha(numeroBatalha:number):string[]{
    this.dialogo = [];
    switch(numeroBatalha){
      case 1:
        return this.campanha1();
      break;

      case 4:
        return this.campanha4();
      break;

      case 5:
        return this.campanha5();
      break;

      case 14:
        return this.campanha14();
      break;

      case 16:
        return this.campanha16();
      break;

      case 20:
        return this.campanha20();
      break;

      case 21:
        return this.campanha21();
      break;
      
    }
    
    return this.dialogo;
  }
  campanha1():string[]{
    this.personagemAtual = 'professor.png';
    this.dialogo.push('Seja bem vindo! Sua jornada pokemon começou.');
    this.dialogo.push('Preparei algumas cartas para você. Consulte-as no seu deck e organize-as da melhor maneira pra cada batalha.');
    this.dialogo.push('Em caso de dúvida consulte o guia que preparei para você');
    this.dialogo.push('Antes de te dar missões fortes, preparei 3 sombras para você enfrentar.');
    this.dialogo.push('Boa sorte! Volte quando tiver acabado.');
    return this.dialogo;
  }
  campanha4():string[]{
    this.personagemAtual = 'professor.png';
    this.dialogo.push('Pelo visto você derrotou as sombras. Muito bem!');
    this.dialogo.push('Você leva jeito para ser um treinador pokémon.');
    this.dialogo.push('Antes de eu enviar você para a jornada de fato, preciso ter certeza de que você está pronto.');
    this.dialogo.push('Vamos duelar.');
    return this.dialogo;
  }
  campanha5():string[]{
    this.personagemAtual = 'professor.png';
    this.dialogo.push('Você me venceu!');
    this.dialogo.push('Agora eu tenho uma missão importante para você...');
    this.dialogo.push('Antes de tudo, saiba a sua jornada a partir daqui ficará cada vez mais difícil.');
    this.dialogo.push('Você ja ouviu falar de líderes de ginásios?');
    this.dialogo.push('Eles são treinadores que oferecem desafios nos seus ginásios.');
    this.dialogo.push('O grande diferencial é que eles utilizam pokémons de elementos específicos, então use isso ao seu favor.');
    this.dialogo.push('No total são 9.');
    this.dialogo.push('Caso não consiga vencê-los entre na área "treinadores" e lute contra Shadow\'s pra obter cartas mais fortes.');
    this.dialogo.push('Boa sorte! Você vai precisar...');
    return this.dialogo;
  }
  campanha14():string[]{
    this.personagemAtual = 'professor.png';
    this.dialogo.push('Uau!');
    this.dialogo.push('Você conseguiu derrotar todos...');
    this.dialogo.push('Nunca vi alguém tão jovem conseguir este feito.');
    this.dialogo.push('Você pode tirar um descanso, não deve ter sido fácil encarar aqueles mestres pokémons.');
    this.dialogo.push('Nos vemos daqui uma semana.');
    this.dialogo.push('O que? Você quer entrar na liga pokémon amadora?');
    this.dialogo.push('Numa liga as coisas são diferentes...');
    this.dialogo.push('Caso você perca uma partida voltará pro início da liga e terá que enfrentar todos os oponentes novamente...');
    this.dialogo.push('Então tá. Sua próxima batalha será pela liga.');
    this.dialogo.push('...');
    this.dialogo.push('Uma última coisa.');
    this.dialogo.push('Há rumores que na estrada que dá acesso a liga existem ladrões altamente capacitados.');
    this.dialogo.push('Sugiro que tome cuidado.');
    return this.dialogo;
  }
  campanha16():string[]{
    this.personagemAtual = 'misty.png';
    this.dialogo.push('Olha você aí!');
    this.dialogo.push('Querendo entrar pra liga pokémon?');
    this.dialogo.push('Chegou a tempo. Hoje é o último dia de inscrições');
    this.dialogo.push('Vou fazer sua inscrição. Amanhã as batalhas começam.');
    return this.dialogo;
  }
  campanha20():string[]{
    this.personagemAtual = 'professor.png';
    this.dialogo.push('Olá!');
    this.dialogo.push('Vim pra assistir a final. Bom saber que você estará naquela arena.');
    this.dialogo.push('Você enfrentará meu neto, Gary.');
    this.dialogo.push('Ele ganhou a última edição da liga pokémon amadora.');
    this.dialogo.push('Os pokémons dele são muito fortes, sugiro que seu deck esteja preparado antes de enfrentá-lo.');
    this.dialogo.push('Ficarei feliz com a vitória de qualquer um dos dois!');
    return this.dialogo;
  }
  campanha21():string[]{
    this.personagemAtual = 'professor.png';
    this.dialogo.push('Meus parabéns!');
    this.dialogo.push('O grande campeão da liga amadora de pokémon!');
    this.dialogo.push('A partir de agora você esta por si só, mas...');
    this.dialogo.push('Se quer um palpite, deveria enfrentar os lendários treinadores da "Elite Four".');
    this.dialogo.push('Aproveite sua vitória!');
    return this.dialogo;
  }

}
