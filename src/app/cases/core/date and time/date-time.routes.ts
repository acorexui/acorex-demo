import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'advanced-operations',
    loadComponent: () =>
      import('./advanced-operations/advanced-operations.component').then(
        (e) => e.AdvancedOperationsComponent
      ),
  },
];
