import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'hint',
    loadComponent: () =>
      import('./hint/hint.component').then((e) => e.HintComponent),
  },
];
