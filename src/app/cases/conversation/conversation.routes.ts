import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'custom',
    loadComponent: () =>
      import('./custom/custom.component').then((e) => e.CustomComponent),
  },
  {
    path: 'infinite-scroll',
    loadComponent: () =>
      import('./infinite-scroll/infinite-scroll.component').then(
        (c) => c.InfiniteScrollComponent
      ),
  },
];
