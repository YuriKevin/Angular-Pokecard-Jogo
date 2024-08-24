import { Card } from "./card";

export interface Treinador{
    nome:string;
    dificuldade:string;
    deck:Card[];
    imagem:string;
    dica:string;
}