import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'disable',
    loadComponent: () =>
      import('./disable/disable.component').then((e) => e.DisableComponent),
  },
  {
    path: 'read-only',
    loadComponent: () =>
      import('./read-only/read-only.component').then(
        (e) => e.ReadOnlyComponent
      ),
  },
  {
    path: 'using-decorators',
    loadComponent: () =>
      import('./using-decorators/using-decorators.component').then(
        (e) => e.UsingDecoratorsComponent
      ),
  },
];
