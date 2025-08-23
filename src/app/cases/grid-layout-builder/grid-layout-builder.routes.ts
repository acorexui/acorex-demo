import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then(
        (e) => e.GridLayoutBuilderUsageComponent
      ),
  },
  {
    path: 'responsive',
    loadComponent: () =>
      import('./responsive/responsive.component').then(
        (m) => m.GridLayoutBuilderResponsiveComponent
      ),
  },
  {
    path: 'api',
    loadComponent: () =>
      import('./api/api.component').then(
        (m) => m.GridLayoutBuilderApiComponent
      ),
  },
];
