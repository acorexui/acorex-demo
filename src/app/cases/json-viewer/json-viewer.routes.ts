import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'nested',
    loadComponent: () =>
      import('./nested/nested.component').then(
        (m) => m.NestedJsonViewerComponent
      ),
  },
  {
    path: 'dynamic',
    loadComponent: () =>
      import('./dynamic/dynamic.component').then(
        (m) => m.DynamicJsonViewerComponent
      ),
  },
];
