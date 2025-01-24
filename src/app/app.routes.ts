import { Routes } from '@angular/router';
import { WeatherComponent } from './core/components/weather/weather.component';

export const routes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/weather',
    pathMatch: 'full',
  },
];
