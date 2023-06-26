import { Routes } from '@angular/router';
import { HeroesComponent } from '../app/components/heroes/heroes.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../app/components/hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
];
