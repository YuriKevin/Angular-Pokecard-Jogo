import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DueloComponent } from './components/duelo/duelo.component';
import { CampanhaComponent } from './components/campanha/campanha.component';
import { DeckComponent } from './components/deck/deck.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { GuiaComponent } from './components/guia/guia.component';
import { SkinsComponent } from './components/skins/skins.component';
import { JogarNovamenteComponent } from './components/jogar-novamente/jogar-novamente.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'duelo', component: DueloComponent },
    { path: 'campanha', component: CampanhaComponent },
    { path: 'deck', component: DeckComponent },
    { path: 'cartas', component: CartasComponent },
    { path: 'guia', component: GuiaComponent },
    { path: 'skins', component: SkinsComponent },
    { path: 'jogar-novamente', component: JogarNovamenteComponent },
]
