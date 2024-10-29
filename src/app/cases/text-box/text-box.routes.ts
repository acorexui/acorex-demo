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
    path: 'using-decorators',
    loadComponent: () =>
      import('./using-decorators/using-decorators.component').then(
        (e) => e.UsingDecoratorsComponent
      ),
  },
  {
    path: 'number-mode',
    loadComponent: () =>
      import('./number-mode/number-mode.component').then(
        (e) => e.NumberModeComponent
      ),
  },
];
