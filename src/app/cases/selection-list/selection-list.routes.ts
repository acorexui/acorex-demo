import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'control',
    loadComponent: () =>
      import('./control/control.component').then((e) => e.UsageComponent),
  },
  {
    path: 'hint',
    loadComponent: () =>
      import('./hint/hint.component').then((e) => e.UsageComponent),
  },
  {
    path: 'horizontal',
    loadComponent: () =>
      import('./horizontal/horizontal.component').then((e) => e.UsageComponent),
  },
  {
    path: 'multiple',
    loadComponent: () =>
      import('./multiple/multiple.component').then((e) => e.UsageComponent),
  },
  {
    path: 'custom',
    loadComponent: () =>
      import('./custom/custom.component').then((e) => e.CustomComponent),
  },
];
