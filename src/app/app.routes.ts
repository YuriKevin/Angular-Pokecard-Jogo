import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DueloComponent } from './components/duelo/duelo.component';
import { CampanhaComponent } from './components/campanha/campanha.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'duelo', component: DueloComponent },
    { path: 'campanha', component: CampanhaComponent },
]
