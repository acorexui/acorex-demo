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
    path: 'has-border',
    loadComponent: () =>
      import('./has-border/has-border.component').then(
        (e) => e.HasBorderComponent
      ),
  },
  {
    path: 'indicator-position',
    loadComponent: () =>
      import('./indicator-position/indicator-position.component').then(
        (e) => e.IndicatorPositionComponent
      ),
  },
  {
    path: 'prefix-suffix',
    loadComponent: () =>
      import('./prefix-suffix/prefix-suffix.component').then(
        (e) => e.PrefixSuffixComponent
      ),
  },
  {
    path: 'disabled',
    loadComponent: () =>
      import('./disabled/disabled.component').then((e) => e.disabledComponent),
  },
  {
    path: 'look',
    loadComponent: () =>
      import('./look/look.component').then((e) => e.LookComponent),
  },
  {
    path: 'icon-only',
    loadComponent: () =>
      import('./icon-only/icon-only.component').then(
        (e) => e.IconOnlyComponent
      ),
  },
  {
    path: 'many-items',
    loadComponent: () =>
      import('./many-items/many-items.component').then(
        (e) => e.ManyItemsComponent
      ),
  },
];
