import { Injectable } from '@angular/core';
import { Deck } from '../model/deck';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards:Card[] = [];
  constructor() { 
    //Elétricos
    const card1: Card = {
      id: 1,
      nome: 'Pikachu',
      imagem: '1.png',
      forca: 60,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card2: Card = {
      id: 2,
      nome: 'Raichu',
      imagem: '2.png',
      forca: 130,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card3: Card = {
      id: 3,
      nome: 'Chinchou',
      imagem: '3.png',
      forca: 70,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card4: Card = {
      id: 4,
      nome: 'Lanturn',
      imagem: '4.png',
      forca: 120,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card5: Card = {
      id: 5,
      nome: 'Joltik',
      imagem: '5.png',
      forca: 50,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card6: Card = {
      id: 6,
      nome: 'Galvantula',
      imagem: '6.png',
      forca: 100,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card7: Card = {
      id: 7,
      nome: 'Electabuzz',
      imagem: '7.png',
      forca: 90,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card8: Card = {
      id: 8,
      nome: 'Electvire',
      imagem: '8.png',
      forca: 140,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card9: Card = {
      id: 9,
      nome: 'Shinx',
      imagem: '9.png',
      forca: 60,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card10: Card = {
      id: 10,
      nome: 'Luxray',
      imagem: '10.png',
      forca: 160,
      elemento: 'Elétrico',
      raridade: 'Comum'
    };
    const card11: Card = {
      id: 11,
      nome: 'Zapdos',
      imagem: '11.png',
      forca: 200,
      elemento: 'Elétrico',
      raridade: 'Rara'
    };
    const card12: Card = {
      id: 12,
      nome: 'Pikachu',
      imagem: '12.png',
      forca: 190,
      elemento: 'Elétrico',
      raridade: 'Rara'
    };
    const card13: Card = {
      id: 13,
      nome: 'Zeraora',
      imagem: '13.png',
      forca: 210,
      elemento: 'Elétrico',
      raridade: 'Rara'
    };
    const card14: Card = {
      id: 14,
      nome: 'Raikou',
      imagem: '14.png',
      forca: 200,
      elemento: 'Elétrico',
      raridade: 'Rara'
    };
    const card15: Card = {
      id: 15,
      nome: 'Rotom',
      imagem: '15.png',
      forca: 190,
      elemento: 'Elétrico',
      raridade: 'Rara'
    };
    const card16: Card = {
      id: 16,
      nome: 'Pikachu',
      imagem: '16.png',
      forca: 310,
      elemento: 'Elétrico',
      raridade: 'Lendária'
    };
    const card17: Card = {
      id: 17,
      nome: 'Jolteon',
      imagem: '17.png',
      forca: 300,
      elemento: 'Elétrico',
      raridade: 'Lendária'
    };


    //Grama
    const card18: Card = {
      id: 18,
      nome: 'Scyther',
      imagem: '18.png',
      forca: 80,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card19: Card = {
      id: 19,
      nome: 'Abomasnow',
      imagem: '19.png',
      forca: 140,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card20: Card = {
      id: 20,
      nome: 'Cartepie',
      imagem: '20.png',
      forca: 50,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card21: Card = {
      id: 21,
      nome: 'Heracross',
      imagem: '21.png',
      forca: 130,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card22: Card = {
      id: 22,
      nome: 'Ludicolo',
      imagem: '22.png',
      forca: 160,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card23: Card = {
      id: 23,
      nome: 'Paras',
      imagem: '23.png',
      forca: 60,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card24: Card = {
      id: 24,
      nome: 'Kakuna',
      imagem: '24.png',
      forca: 80,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card25: Card = {
      id: 25,
      nome: 'Tangela',
      imagem: '25.png',
      forca: 80,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card26: Card = {
      id: 26,
      nome: 'Shiftry',
      imagem: '26.png',
      forca: 150,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card27: Card = {
      id: 27,
      nome: 'Tropius',
      imagem: '27.png',
      forca: 110,
      elemento: 'Grama',
      raridade: 'Comum'
    };
    const card28: Card = {
      id: 28,
      nome: 'Leafeon',
      imagem: '28.png',
      forca: 200,
      elemento: 'Grama',
      raridade: 'Rara'
    };
    const card29: Card = {
      id: 29,
      nome: 'Serperior',
      imagem: '29.png',
      forca: 210,
      elemento: 'Grama',
      raridade: 'Rara'
    };
    const card30: Card = {
      id: 30,
      nome: 'Butterfree',
      imagem: '30.png',
      forca: 190,
      elemento: 'Grama',
      raridade: 'Rara'
    };
    const card31: Card = {
      id: 31,
      nome: 'Celebi',
      imagem: '31.png',
      forca: 190,
      elemento: 'Grama',
      raridade: 'Rara'
    };
    const card32: Card = {
      id: 32,
      nome: 'Breloom',
      imagem: '32.png',
      forca: 210,
      elemento: 'Grama',
      raridade: 'Rara'
    };
    const card33: Card = {
      id: 33,
      nome: 'Venusar',
      imagem: '33.png',
      forca: 340,
      elemento: 'Grama',
      raridade: 'Lendária'
    };
    const card34: Card = {
      id: 34,
      nome: 'Torterra',
      imagem: '34.png',
      forca: 340,
      elemento: 'Grama',
      raridade: 'Lendária'
    };

    //fogo
    const card35: Card = {
      id: 35,
      nome: 'Magcargo',
      imagem: '35.png',
      forca: 130,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card36: Card = {
      id: 36,
      nome: 'Vulpix',
      imagem: '36.png',
      forca: 60,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card37: Card = {
      id: 37,
      nome: 'Growlithe',
      imagem: '37.png',
      forca: 80,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card38: Card = {
      id: 38,
      nome: 'Arcanine',
      imagem: '38.png',
      forca: 130,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card39: Card = {
      id: 39,
      nome: 'Magmortar',
      imagem: '39.png',
      forca: 140,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card40: Card = {
      id: 40,
      nome: 'Pansear',
      imagem: '40.png',
      forca: 60,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card41: Card = {
      id: 41,
      nome: 'Volcarona',
      imagem: '41.png',
      forca: 120,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card42: Card = {
      id: 42,
      nome: 'Victini',
      imagem: '42.png',
      forca: 70,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card43: Card = {
      id: 43,
      nome: 'Charmander',
      imagem: '43.png',
      forca: 70,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card44: Card = {
      id: 44,
      nome: 'Charmeleon',
      imagem: '44.png',
      forca: 90,
      elemento: 'Fogo',
      raridade: 'Comum'
    };
    const card45: Card = {
      id: 45,
      nome: 'Ninetales',
      imagem: '45.png',
      forca: 80,
      elemento: 'Fogo',
      raridade: 'Rara'
    };
    const card46: Card = {
      id: 46,
      nome: 'Talonflame',
      imagem: '46.png',
      forca: 190,
      elemento: 'Fogo',
      raridade: 'Rara'
    };
    const card47: Card = {
      id: 47,
      nome: 'Blaziken',
      imagem: '47.png',
      forca: 210,
      elemento: 'Fogo',
      raridade: 'Rara'
    };
    const card48: Card = {
      id: 48,
      nome: 'Entei',
      imagem: '48.png',
      forca: 230,
      elemento: 'Fogo',
      raridade: 'Rara'
    };
    const card49: Card = {
      id: 48,
      nome: 'Heatran',
      imagem: '48.png',
      forca: 220,
      elemento: 'Fogo',
      raridade: 'Rara'
    };
    const card50: Card = {
      id: 50,
      nome: 'Charizard',
      imagem: '50.png',
      forca: 330,
      elemento: 'Fogo',
      raridade: 'Lendária'
    };
    const card51: Card = {
      id: 51,
      nome: 'Charizard',
      imagem: '51.png',
      forca: 330,
      elemento: 'Fogo',
      raridade: 'Lendária'
    };

    //Água
    const card52: Card = {
      id: 52,
      nome: 'Magikarp',
      imagem: '52.png',
      forca: 30,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card53: Card = {
      id: 53,
      nome: 'Squirtle',
      imagem: '53.png',
      forca: 60,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card54: Card = {
      id: 54,
      nome: 'Swampert',
      imagem: '54.png',
      forca: 170,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card55: Card = {
      id: 55,
      nome: 'Vaporeon',
      imagem: '55.png',
      forca: 110,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card56: Card = {
      id: 56,
      nome: 'Lapras',
      imagem: '56.png',
      forca: 130,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card57: Card = {
      id: 57,
      nome: 'Horsea',
      imagem: '57.png',
      forca: 60,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card58: Card = {
      id: 58,
      nome: 'Kingdra',
      imagem: '58.png',
      forca: 150,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card59: Card = {
      id: 59,
      nome: 'Psyduck',
      imagem: '59.png',
      forca: 70,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card60: Card = {
      id: 60,
      nome: 'Tentacruel',
      imagem: '60.png',
      forca: 120,
      elemento: 'Água',
      raridade: 'Comum'
    };
    const card61: Card = {
      id: 61,
      nome: 'Feraligatr',
      imagem: '61.png',
      forca: 170,
      elemento: 'Água',
      raridade: 'Comum'
    };

    const card62: Card = {
      id: 62,
      nome: 'Milotic',
      imagem: '62.png',
      forca: 210,
      elemento: 'Água',
      raridade: 'Rara'
    };
    const card63: Card = {
      id: 63,
      nome: 'Empoleon',
      imagem: '63.png',
      forca: 210,
      elemento: 'Água',
      raridade: 'Rara'
    };
    const card64: Card = {
      id: 64,
      nome: 'Suicune',
      imagem: '64.png',
      forca: 210,
      elemento: 'Água',
      raridade: 'Rara'
    };
    const card65: Card = {
      id: 65,
      nome: 'Greninja',
      imagem: '65.png',
      forca: 210,
      elemento: 'Água',
      raridade: 'Rara'
    };
    const card66: Card = {
      id: 66,
      nome: 'Kyogre',
      imagem: '66.png',
      forca: 230,
      elemento: 'Água',
      raridade: 'Rara'
    };
    const card67: Card = {
      id: 67,
      nome: 'Gyarados',
      imagem: '67.png',
      forca: 330,
      elemento: 'Água',
      raridade: 'Lendária'
    };
    const card68: Card = {
      id: 68,
      nome: 'Blastoise',
      imagem: '68.png',
      forca: 330,
      elemento: 'Água',
      raridade: 'Lendária'
    };

    //Psiquico
    const card69: Card = {
      id: 69,
      nome: 'Clefairy',
      imagem: '69.png',
      forca: 60,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card70: Card = {
      id: 70,
      nome: 'Clefable',
      imagem: '70.png',
      forca: 110,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card71: Card = {
      id: 71,
      nome: 'Natu',
      imagem: '71.png',
      forca: 60,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card72: Card = {
      id: 72,
      nome: 'Xatu',
      imagem: '72.png',
      forca: 120,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card73: Card = {
      id: 73,
      nome: 'Mimikyu',
      imagem: '73.png',
      forca: 70,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card74: Card = {
      id: 74,
      nome: 'Claydol',
      imagem: '74.png',
      forca: 120,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card75: Card = {
      id: 75,
      nome: 'Slowpoke',
      imagem: '75.png',
      forca: 70,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card76: Card = {
      id: 76,
      nome: 'Jynx',
      imagem: '76.png',
      forca: 100,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card77: Card = {
      id: 77,
      nome: 'Togekiss',
      imagem: '77.png',
      forca: 130,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };
    const card78: Card = {
      id: 78,
      nome: 'Gallade',
      imagem: '78.png',
      forca: 160,
      elemento: 'Psiquico',
      raridade: 'Comum'
    };


    const card79: Card = {
      id: 79,
      nome: 'Espeon',
      imagem: '79.png',
      forca: 200,
      elemento: 'Psiquico',
      raridade: 'Rara'
    };
    const card80: Card = {
      id: 80,
      nome: 'Sylveon',
      imagem: '80.png',
      forca: 200,
      elemento: 'Psiquico',
      raridade: 'Rara'
    };
    const card81: Card = {
      id: 81,
      nome: 'Mewtwo',
      imagem: '81.png',
      forca: 220,
      elemento: 'Psiquico',
      raridade: 'Rara'
    };
    const card82: Card = {
      id: 82,
      nome: 'Mawile',
      imagem: '82.png',
      forca: 200,
      elemento: 'Psiquico',
      raridade: 'Rara'
    };
    const card83: Card = {
      id: 83,
      nome: 'Wobbuffet',
      imagem: '83.png',
      forca: 220,
      elemento: 'Psiquico',
      raridade: 'Rara'
    };

    const card84: Card = {
      id: 84,
      nome: 'Mew',
      imagem: '84.png',
      forca: 310,
      elemento: 'Psiquico',
      raridade: 'Lendária'
    };
    const card85: Card = {
      id: 85,
      nome: 'Alakazam',
      imagem: '85.png',
      forca: 310,
      elemento: 'Psiquico',
      raridade: 'Lendária'
    };

    //Lutador
    const card86: Card = {
      id: 86,
      nome: 'Hitmonchan',
      imagem: '86.png',
      forca: 120,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card87: Card = {
      id: 87,
      nome: 'Hitmonlee',
      imagem: '87.png',
      forca: 120,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card88: Card = {
      id: 88,
      nome: 'Farfetch\'d',
      imagem: '88.png',
      forca: 80,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card89: Card = {
      id: 89,
      nome: 'Machop',
      imagem: '89.png',
      forca: 70,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card90: Card = {
      id: 90,
      nome: 'Taurus',
      imagem: '90.png',
      forca: 100,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card91: Card = {
      id: 91,
      nome: 'Riolu',
      imagem: '91.png',
      forca: 70,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card92: Card = {
      id: 92,
      nome: 'Primeape',
      imagem: '92.png',
      forca: 120,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card93: Card = {
      id: 93,
      nome: 'Toxicroak',
      imagem: '93.png',
      forca: 130,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card94: Card = {
      id: 94,
      nome: 'Haryiama',
      imagem: '94.png',
      forca: 140,
      elemento: 'Lutador',
      raridade: 'Comum'
    };
    const card95: Card = {
      id: 95,
      nome: 'Hitmontop',
      imagem: '95.png',
      forca: 100,
      elemento: 'Lutador',
      raridade: 'Comum'
    };

    const card96: Card = {
      id: 96,
      nome: 'Machamp',
      imagem: '96.png',
      forca: 220,
      elemento: 'Lutador',
      raridade: 'Rara'
    };
    const card97: Card = {
      id: 97,
      nome: 'Lucario',
      imagem: '97.png',
      forca: 210,
      elemento: 'Lutador',
      raridade: 'Rara'
    };
    const card98: Card = {
      id: 98,
      nome: 'Medicham',
      imagem: '98.png',
      forca: 210,
      elemento: 'Lutador',
      raridade: 'Rara'
    };
    const card99: Card = {
      id: 99,
      nome: 'Conkeldurr',
      imagem: '99.png',
      forca: 180,
      elemento: 'Lutador',
      raridade: 'Rara'
    };
    const card100: Card = {
      id: 100,
      nome: 'Regirock',
      imagem: '100.png',
      forca: 220,
      elemento: 'Lutador',
      raridade: 'Rara'
    };
    const card101: Card = {
      id: 101,
      nome: 'Rhyperior',
      imagem: '101.png',
      forca: 220,
      elemento: 'Lutador',
      raridade: 'Rara'
    };
    const card102: Card = {
      id: 102,
      nome: 'Machamp',
      imagem: '102.png',
      forca: 330,
      elemento: 'Lutador',
      raridade: 'Lendária'
    };
    const card103: Card = {
      id: 103,
      nome: 'Lycanroc',
      imagem: '103.png',
      forca: 320,
      elemento: 'Lutador',
      raridade: 'Lendária'
    };

    //Sombrio
    const card104: Card = {
      id: 104,
      nome: 'Koffing',
      imagem: '104.png',
      forca: 70,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card105: Card = {
      id: 105,
      nome: 'Weezing',
      imagem: '105.png',
      forca: 130,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card106: Card = {
      id: 106,
      nome: 'Grimer',
      imagem: '106.png',
      forca: 80,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card107: Card = {
      id: 107,
      nome: 'Muk',
      imagem: '107.png',
      forca: 140,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card108: Card = {
      id: 108,
      nome: 'Poochyena',
      imagem: '108.png',
      forca: 70,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card109: Card = {
      id: 109,
      nome: 'Mightyena',
      imagem: '109.png',
      forca: 110,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card110: Card = {
      id: 110,
      nome: 'Krookodile',
      imagem: '110.png',
      forca: 150,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card111: Card = {
      id: 111,
      nome: 'Zubat',
      imagem: '111.png',
      forca: 50,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card112: Card = {
      id: 112,
      nome: 'Crobat',
      imagem: '112.png',
      forca: 130,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };
    const card113: Card = {
      id: 113,
      nome: 'Honchkrow',
      imagem: '113.png',
      forca: 130,
      elemento: 'Sombrio',
      raridade: 'Comum'
    };

    const card114: Card = {
      id: 114,
      nome: 'Tyranitar',
      imagem: '114.png',
      forca: 230,
      elemento: 'Sombrio',
      raridade: 'Rara'
    };
    const card115: Card = {
      id: 115,
      nome: 'Umbreon',
      imagem: '115.png',
      forca: 200,
      elemento: 'Sombrio',
      raridade: 'Rara'
    };
    const card116: Card = {
      id: 116,
      nome: 'Darkrai',
      imagem: '116.png',
      forca: 210,
      elemento: 'Sombrio',
      raridade: 'Rara'
    };
    const card117: Card = {
      id: 117,
      nome: 'Toxicroak',
      imagem: '117.png',
      forca: 250,
      elemento: 'Sombrio',
      raridade: 'Rara'
    };
    const card118: Card = {
      id: 118,
      nome: 'Absol',
      imagem: '118.png',
      forca: 210,
      elemento: 'Sombrio',
      raridade: 'Rara'
    };
    const card119: Card = {
      id: 119,
      nome: 'Gengar',
      imagem: '119.png',
      forca: 320,
      elemento: 'Sombrio',
      raridade: 'Lendária'
    };
    const card120: Card = {
      id: 120,
      nome: 'Eternatus',
      imagem: '120.png',
      forca: 340,
      elemento: 'Sombrio',
      raridade: 'Lendária'
    };

    //Metal
    const card121: Card = {
      id: 121,
      nome: 'Ferrothorn',
      imagem: '121.png',
      forca: 130,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card122: Card = {
      id: 122,
      nome: 'Pawniard',
      imagem: '122.png',
      forca: 70,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card123: Card = {
      id: 123,
      nome: 'Bronzor',
      imagem: '123.png',
      forca: 60,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card124: Card = {
      id: 124,
      nome: 'Bronzong',
      imagem: '124.png',
      forca: 130,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card125: Card = {
      id: 125,
      nome: 'Aegislash',
      imagem: '125.png',
      forca: 140,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card126: Card = {
      id: 126,
      nome: 'Skarmory',
      imagem: '126.png',
      forca: 120,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card127: Card = {
      id: 127,
      nome: 'Aron',
      imagem: '127.png',
      forca: 70,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card128: Card = {
      id: 128,
      nome: 'Lairon',
      imagem: '128.png',
      forca: 100,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card129: Card = {
      id: 129,
      nome: 'Kinklang',
      imagem: '129.png',
      forca: 150,
      elemento: 'Metal',
      raridade: 'Comum'
    };
    const card130: Card = {
      id: 130,
      nome: 'Kinklang',
      imagem: '130.png',
      forca: 100,
      elemento: 'Metal',
      raridade: 'Comum'
    };


    const card131: Card = {
      id: 131,
      nome: 'Copperajah',
      imagem: '131.png',
      forca: 220,
      elemento: 'Metal',
      raridade: 'Rara'
    };
    const card132: Card = {
      id: 132,
      nome: 'Steelix',
      imagem: '132.png',
      forca: 250,
      elemento: 'Metal',
      raridade: 'Rara'
    };
    const card133: Card = {
      id: 133,
      nome: 'Aggron',
      imagem: '133.png',
      forca: 230,
      elemento: 'Metal',
      raridade: 'Rara'
    };
    const card134: Card = {
      id: 134,
      nome: 'Dialga',
      imagem: '134.png',
      forca: 220,
      elemento: 'Metal',
      raridade: 'Rara'
    };
    const card135: Card = {
      id: 135,
      nome: 'Radiant Steelix',
      imagem: '135.png',
      forca: 170,
      elemento: 'Metal',
      raridade: 'Rara'
    };
    const card136: Card = {
      id: 136,
      nome: 'Scizor',
      imagem: '136.png',
      forca: 320,
      elemento: 'Metal',
      raridade: 'Lendária'
    };
    const card137: Card = {
      id: 137,
      nome: 'Metagross',
      imagem: '137.png',
      forca: 330,
      elemento: 'Metal',
      raridade: 'Lendária'
    };

    //Voador
    const card138: Card = {
      id: 138,
      nome: 'Hoothoot',
      imagem: '138.png',
      forca: 70,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card139: Card = {
      id: 139,
      nome: 'Noctowl',
      imagem: '139.png',
      forca: 110,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card140: Card = {
      id: 140,
      nome: 'Starly',
      imagem: '140.png',
      forca: 50,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card141: Card = {
      id: 141,
      nome: 'Staraptor',
      imagem: '141.png',
      forca: 150,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card142: Card = {
      id: 142,
      nome: 'Swellow',
      imagem: '142.png',
      forca: 90,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card143: Card = {
      id: 143,
      nome: 'Spearow',
      imagem: '143.png',
      forca: 50,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card144: Card = {
      id: 144,
      nome: 'Braviary',
      imagem: '144.png',
      forca: 130,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card145: Card = {
      id: 145,
      nome: 'Talonflame',
      imagem: '145.png',
      forca: 140,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card146: Card = {
      id: 146,
      nome: 'Archeops',
      imagem: '146.png',
      forca: 150,
      elemento: 'Voador',
      raridade: 'Comum'
    };
    const card147: Card = {
      id: 147,
      nome: 'Altaria',
      imagem: '147.png',
      forca: 110,
      elemento: 'Voador',
      raridade: 'Comum'
    };

    const card148: Card = {
      id: 148,
      nome: 'Salamence',
      imagem: '148.png',
      forca: 220,
      elemento: 'Voador',
      raridade: 'Rara'
    };
    const card149: Card = {
      id: 149,
      nome: 'Tornadus',
      imagem: '149.png',
      forca: 210,
      elemento: 'Voador',
      raridade: 'Rara'
    };
    const card150: Card = {
      id: 150,
      nome: 'Dodrio',
      imagem: '150.png',
      forca: 200,
      elemento: 'Voador',
      raridade: 'Rara'
    };
    const card151: Card = {
      id: 151,
      nome: 'Ho-Oh',
      imagem: '151.png',
      forca: 220,
      elemento: 'Voador',
      raridade: 'Rara'
    };
    const card152: Card = {
      id: 152,
      nome: 'Pidgeot',
      imagem: '152.png',
      forca: 210,
      elemento: 'Voador',
      raridade: 'Rara'
    };
    const card153: Card = {
      id: 153,
      nome: 'Arceus',
      imagem: '153.png',
      forca: 280,
      elemento: 'Voador',
      raridade: 'Lendária'
    };
    const card154: Card = {
      id: 154,
      nome: 'Lugia',
      imagem: '154.png',
      forca: 280,
      elemento: 'Voador',
      raridade: 'Lendária'
    };
    const card155: Card = {
      id: 155,
      nome: 'Salamence',
      imagem: '155.png',
      forca: 320,
      elemento: 'Voador',
      raridade: 'Lendária'
    };


    this.cards.push();
  }

  deckInicial(){
    
  }
}