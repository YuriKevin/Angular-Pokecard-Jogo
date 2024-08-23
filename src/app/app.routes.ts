import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OfflineComponent } from './components/offline/offline.component';
import { OnlineComponent } from './components/online/online.component';
import { HeaderComponent } from './components/header/header.component';
import { DueloComponent } from './components/duelo/duelo.component';
import { CampanhaComponent } from './components/campanha/campanha.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'offline', component: OfflineComponent },
    { path: 'online', component: OnlineComponent },
    { path: 'duelo', component: DueloComponent },
    { path: 'campanha', component: CampanhaComponent }
]
