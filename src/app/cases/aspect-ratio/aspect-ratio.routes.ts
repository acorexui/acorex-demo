import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'different-ratios',
    loadComponent: () =>
      import('./different-ratios/different-ratios.component').then(
        (e) => e.DifferentRatiosComponent
      ),
  },
  {
    path: 'responsive-content',
    loadComponent: () =>
      import('./responsive-content/responsive-content.component').then(
        (e) => e.ResponsiveContentComponent
      ),
  },
];
