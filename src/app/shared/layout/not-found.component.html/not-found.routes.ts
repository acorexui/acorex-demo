import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    loadComponent: () =>
      import('./not-found.component').then((e) => e.NotFoundComponent),
  },
];
