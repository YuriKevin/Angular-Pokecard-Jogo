import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DueloComponent } from './components/duelo/duelo.component';
import { CampanhaComponent } from './components/campanha/campanha.component';
import { DeckComponent } from './components/deck/deck.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { GuiaComponent } from './components/guia/guia.component';
import { TreinadoresComponent } from './components/treinadores/treinadores.component';
import { LigaAmadoraComponent } from './components/liga-amadora/liga-amadora.component';
import { LigaMundialComponent } from './components/liga-mundial/liga-mundial.component';
import { GiovanniComponent } from './components/giovanni/giovanni.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'duelo', component: DueloComponent },
    { path: 'campanha', component: CampanhaComponent },
    { path: 'deck', component: DeckComponent },
    { path: 'cartas', component: CartasComponent },
    { path: 'guia', component: GuiaComponent },
    { path: 'treinadores', component: TreinadoresComponent },
    { path: 'liga-amadora', component: LigaAmadoraComponent },
    { path: 'liga-mundial', component: LigaMundialComponent },
    { path: 'final', component: GiovanniComponent },
]
