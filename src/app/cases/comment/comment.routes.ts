import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'interactions',
    loadComponent: () =>
      import('./interactions/interactions.component').then(
        (m) => m.InteractionsComponent
      ),
  },
  {
    path: 'programmatic',
    loadComponent: () =>
      import('./programmatic/programmatic.component').then(
        (m) => m.ProgrammaticComponent
      ),
  },
];
