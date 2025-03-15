import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usage',
    pathMatch: 'full',
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'auto-complete',
    loadComponent: () =>
      import('./auto-complete/auto-complete.component').then(
        (e) => e.AutoCompleteComponent
      ),
  },
];
