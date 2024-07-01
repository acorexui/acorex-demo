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
    path: 'changing-default-icon',
    loadComponent: () =>
      import('./changing-default-icon/changing-default-icon.component').then(
        (e) => e.ChangingDefaultIcon
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
