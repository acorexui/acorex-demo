import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'hash-links',
    loadComponent: () =>
      import('./hash-links/hash-links.component').then((e) => e.HashLinksComponent),
  },
  {
    path: 'scroll-offset',
    loadComponent: () =>
      import('./scroll-offset/scroll-offset.component').then((e) => e.ScrollOffsetComponent),
  },
  {
    path: 'target-selector',
    loadComponent: () =>
      import('./target-selector/target-selector.component').then((e) => e.TargetSelectorComponent),
  },
];
