import { Card } from "./card";

export interface Usuario{
    nome:string;
    cards: Card[];
    deck: Card[];
    batalhaAtual:number;
    imagem:string;
    campeaoLigaAmadora: boolean;
}