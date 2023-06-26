import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/modules/app/components/dashboard/dashboard.component';
import { HeroesComponent } from 'src/modules/app/hero/components/heroes/heroes.component';
import { HeroDetailComponent } from 'src/modules/app/hero/components/detail/hero-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
];
