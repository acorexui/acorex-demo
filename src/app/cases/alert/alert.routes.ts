import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inline', pathMatch: 'full' },
  {
    path: 'inline',
    loadComponent: () =>
      import('./inline/inline.component').then((e) => e.InlineComponent),
  },
];
