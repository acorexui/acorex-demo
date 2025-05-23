import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'custom-icon',
    loadComponent: () =>
      import('./custom-icon/custom-icon.component').then(
        (e) => e.CustomIconComponent
      ),
  },
];
