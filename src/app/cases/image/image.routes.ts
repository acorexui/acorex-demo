import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'overlay',
    loadComponent: () =>
      import('./overlay/overlay.component').then((e) => e.OverlayComponent),
  },
  {
    path: 'loading-placeholder',
    loadComponent: () =>
      import('./loading-placeholder/loading-placeholder.component').then(
        (e) => e.LoadingPlaceholderComponent
      ),
  },
];
