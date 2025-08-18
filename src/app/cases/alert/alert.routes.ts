import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'inline',
    loadComponent: () =>
      import('./inline/inline.component').then((e) => e.InlineComponent),
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'auto-timeout',
    loadComponent: () =>
      import('./auto-timeout/auto-timeout.component').then(
        (e) => e.AutoTimeoutComponent
      ),
  },
  {
    path: 'programmatic-close',
    loadComponent: () =>
      import('./programmatic-close/programmatic-close.component').then(
        (e) => e.ProgrammaticCloseComponent
      ),
  },
  {
    path: 'color-variants',
    loadComponent: () =>
      import('./color-variants/color-variants.component').then(
        (e) => e.ColorVariantsComponent
      ),
  },
  {
    path: 'custom-icon',
    loadComponent: () =>
      import('./custom-icon/custom-icon.component').then(
        (e) => e.CustomIconComponent
      ),
  },
  {
    path: 'block-layout',
    loadComponent: () =>
      import('./block-layout/block-layout.component').then(
        (e) => e.BlockLayoutComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./events/events.component').then((e) => e.EventsComponent),
  },
];
