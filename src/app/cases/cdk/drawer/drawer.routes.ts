import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'mode',
    loadComponent: () =>
      import('./mode/mode.component').then((e) => e.ModeComponent),
  },
  {
    path: 'location',
    loadComponent: () =>
      import('./location/location.component').then((e) => e.LocationComponent),
  },
];
