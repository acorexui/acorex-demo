import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'decorators',
    pathMatch: 'full',
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((b) => b.UsageComponent),
  },
  {
    path: 'badge-in-button',
    loadComponent: () =>
      import('./badge-in-button/badge-in-button.component').then(
        (b) => b.BadgeInButtonComponent
      ),
  },
  {
    path: 'decorators',
    loadComponent: () =>
      import('./decorators/decorators.component').then(
        (d) => d.DecoratorsComponent
      ),
  },
  {
    path: 'icon-button',
    loadComponent: () =>
      import('./icon-button/icon-button.component').then(
        (i) => i.IconButtonComponent
      ),
  },
  {
    path: 'inverted-color',
    loadComponent: () =>
      import('./inverted-color/inverted-color.component').then(
        (i) => i.invertedColorButtonComponent
      ),
  },
  {
    path: 'dropdown',
    loadComponent: () =>
      import('./dropdown/dropdown.component').then((l) => l.DropdownComponent),
  },
  {
    path: 'loading-state',
    loadComponent: () =>
      import('./loading-state/loading-state.component').then(
        (l) => l.LoadingStateComponent
      ),
  },
  {
    path: 'responsive',
    loadComponent: () =>
      import('./responsive/responsive.component').then(
        (l) => l.ResponsiveButtonComponent
      ),
  },
];
