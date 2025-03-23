import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
  { path: '', component: HeroesComponent },  // Default route shows hero list
];
