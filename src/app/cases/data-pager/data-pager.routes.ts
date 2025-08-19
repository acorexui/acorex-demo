import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'compact-interaction',
    loadComponent: () =>
      import('./compact-interaction/compact-interaction.component').then(
        (m) => m.CompactInteractionComponent
      ),
  },
];
