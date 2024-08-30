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

      case 2:
        return this.batalha2();

      case 3:
        return this.batalha3();

      case 5:
        return this.batalha5();
      
      case 6:
        return this.batalha6();

      case 7:
        return this.batalha7();

      case 8:
        return this.batalha8();

      case 9:
        return this.batalha9();

      case 10:
        return this.batalha10();

      case 11:
        return this.batalha11();

      case 12:
        return this.batalha12();

      case 13:
        return this.batalha13();

      case 14:
        return this.batalha14();

      case 15:
        return this.batalha15();

      case 16:
        return this.batalha16();

      case 17:
        return this.batalha17();

      case 18:
        return this.batalha18();

      case 19:
        return this.batalha19();

      case 20:
        return this.batalha20();

      case 21:
        return this.batalha21();

      case 22:
        return this.batalha22();

      case 23:
        return this.batalha23();

      case 24:
        return this.batalha24();
      break;

      case 25:
        return this.batalha25();

      case 26:
        return this.batalha26();

      case 27:
        return this.batalha27();

      case 28:
        return this.batalha28();

      case 29:
        return this.batalha29();

      case 30:
        return this.batalha30();

      case 31:
        return this.batalha31();

      case 0:
        return this.dialogoFinal();

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
  batalha22():string[]{
    this.dialogo.push('Sou Lorelei, da Elite Four.');
    this.dialogo.push('Você só ganhou uma liga amadora e já se acha forte o suficiente pra nos enfrentar?');
    this.dialogo.push('Sinto um banho de água fria se aproximando...');
    return this.dialogo;
  }
  batalha23():string[]{
    this.dialogo.push('O que um cara como você acha que está fazendo?');
    this.dialogo.push('Por acaso nunca ouviu falar sobre o potencial dos treinadores da Elite Four?');
    this.dialogo.push('Somos os 4 melhores treinadores da região, e guardiões da liga mundial.');
    this.dialogo.push('Sua jornada acaba aqui.');
    return this.dialogo;
  }
  batalha24():string[]{
    this.dialogo.push('Acho que já nos enfrentamos...');
    this.dialogo.push('Me lembrei. No ginásio sombrio.');
    this.dialogo.push('Agora as coisas estão diferentes, lá não usei minhas cartas especiais...');
    this.dialogo.push('Você tem medo de assombrações?');
    return this.dialogo;
  }
  batalha25():string[]{
    this.dialogo.push('Eu sou o Lance.');
    this.dialogo.push('O último desafiante da Elite Four.');
    this.dialogo.push('Você está a um passo da liga mundial.');
    this.dialogo.push('Mas será o passo mais difícil, sinto muito.');
    return this.dialogo;
  }
  batalha26():string[]{
    this.dialogo.push('Bem-vindo a liga mundial!');
    this.dialogo.push('Todos os olhos do mundo estão voltados para esse lugar');
    this.dialogo.push('Sua primeira batalha será comigo.');
    this.dialogo.push('Está pronto?');
    return this.dialogo;
  }
  batalha27():string[]{
    this.dialogo.push('Eu sou Diantha.');
    this.dialogo.push('Parece que você é o queridinho da torcida este ano.');
    this.dialogo.push('Eles gritam seu nome...');
    this.dialogo.push('Mas não vai ser a primeira vez que eu derroto um favorito.');
    this.dialogo.push('VAMOS!');
    return this.dialogo;
  }
  batalha28():string[]{
    this.dialogo.push('Chegou longe gafanhoto.');
    this.dialogo.push('Estou ansiosa para ver do que você é capaz!');
    return this.dialogo;
  }
  batalha29():string[]{
    this.dialogo.push('Gosta do clima de uma semi-final?');
    this.dialogo.push('Espero que não esteja pressionado.');
    this.dialogo.push('Mas não se preocupe! Vou acabar com isso rápido.');
    this.dialogo.push('Prepare seus pokémons para disputar o terceiro lugar.');
    return this.dialogo;
  }
  batalha30():string[]{
    this.dialogo.push('Então você é o famoso novato da Liga Mundial!');
    this.dialogo.push('Estou feliz em conhecê-lo.');
    this.dialogo.push('Será uma honra batalhar com você!.');
    this.dialogo.push('Vamos fazer dessa final a melhor de todas!');
    this.dialogo.push('Afinal, começamos da mesma forma. Temos muito em comum...');
    this.dialogo.push('Chegou a hora!');
    return this.dialogo;
  }
  batalha31():string[]{
    this.dialogo.push('Então você é o famoso campeão da Liga Mundial...');
    this.dialogo.push('O treinador mais forte do mundo.');
    this.dialogo.push('Ou o segundo, já que agora eu tenho um novo brinquedinho...');
    this.dialogo.push('Com o Eternatus em mãos, nada poderá me deter.');
    this.dialogo.push('Meu plano? Sequestrar todos os pokémons do planeta.');
    this.dialogo.push('As pessoas ficarão sem seus pokémons...');
    this.dialogo.push('Enquanto eu terei todos eles...');
    this.dialogo.push('Então todos irão me servir.');
    this.dialogo.push('O fim chegou!');
    return this.dialogo;
  }
  retornarDialogoCampanha(numeroBatalha:number):string[]{
    this.dialogo = [];
    switch(numeroBatalha){
      case 1:
        return this.campanha1();

      case 4:
        return this.campanha4();

      case 5:
        return this.campanha5();

      case 14:
        return this.campanha14();

      case 16:
        return this.campanha16();

      case 20:
        return this.campanha20();

      case 21:
        return this.campanha21();

      case 26:
        return this.campanha26();
      
      case 30:
        return this.campanha30();

      case 31:
        return this.campanha31();
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
    this.dialogo.push('Ao vencê-los, você consegue se candidatar a Liga mundial de Pokémon.');
    this.dialogo.push('Aproveite sua vitória!');
    return this.dialogo;
  }
  campanha26():string[]{
    this.personagemAtual = 'lance.png';
    this.dialogo.push('Agora que venceu todos os membros da Elite Four você conseguiu o passe para entrar na liga mundial.');
    this.dialogo.push('Boa sorte!');
    return this.dialogo;
  }
  campanha30():string[]{
    this.personagemAtual = 'professor.png';
    this.dialogo.push('Meu velho amigo!');
    this.dialogo.push('Que felicidade prestigiar a sua primeira final da liga pokémon mundial!');
    this.dialogo.push('Vai ser uma batalha muito interessante.');
    this.dialogo.push('Não esperava nada menos do Ash nessa final, pela terceira vez consecutiva.');
    this.dialogo.push('Campeão duas vezes da Liga Mndial.')
    this.dialogo.push('Ash é um velho conhecido. O treinador mais obstinado que já conheci. Sempre batalha com honra.')
    this.dialogo.push('Boa sorte!');
    this.dialogo.push('Será um espetáculo.');
    return this.dialogo;
  }
  campanha31():string[]{
    this.personagemAtual = 'ash.png';
    this.dialogo.push('Precisamos conversar.');
    this.dialogo.push('O mundo está em perigo.');
    this.dialogo.push('Giovanni, chefe da equipe Rocket, conseguiu invocar um Eternatus V Max.');
    this.dialogo.push('Este pokémon é o mais forte do nosso mundo.');
    this.dialogo.push('Ele está aterrorizando pessoas em todo o continente...');
    this.dialogo.push('Você é o atual campeão mundial, o único que pode impedi-lo.');
    this.dialogo.push('Contamos com você.');
    this.dialogo.push('Boa sorte!');
    return this.dialogo;
  }
  dialogoFinal(){
    this.personagemAtual = 'ash.png';
    this.dialogo.push('O mundo está gritando seu nome!');
    this.dialogo.push('Não há palavras para agradecer o que você fez hoje.');
    this.dialogo.push('Você ganhará uma estátua de herói lendário no grande museu da Liga Mundial.');
    this.dialogo.push('Afinal, agora você é um treinador lendário.');
    this.dialogo.push('O mundo pode descansar enquanto você estiver conosco.');
    this.dialogo.push('Esse é o nosso adeus. Obrigado por fazer parte da sua jornada ser a nossa.');
    return this.dialogo;
  }

}
