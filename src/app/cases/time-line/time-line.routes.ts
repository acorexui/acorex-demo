import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'with-icon', pathMatch: 'full' },
  {
    path: 'with-icon',
    loadComponent: () =>
      import('./with-icon/with-icon.component').then(
        (e) => e.WithIconComponent
      ),
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'no-icon',
    loadComponent: () =>
      import('./no-icon/no-icon.component').then((e) => e.NoIconComponent),
  },
];
