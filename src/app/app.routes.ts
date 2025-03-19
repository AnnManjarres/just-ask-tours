import { Routes, withRouterConfig } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AllToursComponent } from './components/alex-tours/all-tours/all-tours.component';
import { HomeComponent } from './components/home/home.component';
import { CholonForeverComponent } from './components/just-ask-tours/cholon-forever/cholon-forever.component';
import { BoraboraComponent } from './components/just-ask-tours/borabora/borabora.component';
import { AtvComponent } from './components/just-ask-tours/atv/atv.component';
import { PalenqueComponent } from './components/just-ask-tours/palenque/palenque.component';
import { CincoIslasComponent } from './components/just-ask-tours/cinco-islas/cinco-islas.component';
import { FenixComponent } from './components/just-ask-tours/fenix/fenix.component';
import { MamoComponent } from './components/just-ask-tours/mamo/mamo.component';
import { MangataComponent } from './components/just-ask-tours/mangata/mangata.component';
import { VolcanComponent } from './components/just-ask-tours/volcan/volcan.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'just-ask-alex/tours', component: AllToursComponent },
    { path: 'cholon', component: CholonForeverComponent},
    { path: 'borabora', component: BoraboraComponent},
    { path: 'atv', component: AtvComponent},
    { path: 'palenque', component: PalenqueComponent},
    { path: 'cinco-islas', component: CincoIslasComponent},
    { path: 'fenix', component: FenixComponent},
    { path: 'mamo', component: MamoComponent},
    { path: 'mangata', component: MangataComponent},
    { path: 'volcan', component: VolcanComponent},

];
