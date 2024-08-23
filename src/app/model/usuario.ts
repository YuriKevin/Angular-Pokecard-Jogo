import { Card } from "./card";
import { Deck } from "./deck";

export interface Usuario{
    nome:string;
    cards: Card[];
    deck: Deck[];
}