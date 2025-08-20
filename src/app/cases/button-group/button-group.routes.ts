import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'selection-modes',
    loadComponent: () =>
      import('./selection-modes/selection-modes.component').then(
        (e) => e.SelectionModesComponent
      ),
  },
  {
    path: 'look',
    loadComponent: () =>
      import('./look/look.component').then((e) => e.LookComponent),
  },
  {
    path: 'color',
    loadComponent: () =>
      import('./color/color.component').then((e) => e.ColorComponent),
  },
  {
    path: 'size',
    loadComponent: () =>
      import('./size/size.component').then((e) => e.SizeComponent),
  },
  {
    path: 'splitted-button',
    loadComponent: () =>
      import('./splitted-button/splitted-button.component').then(
        (e) => e.SplittedButtonComponent
      ),
  },
  {
    path: 'dropdown-items',
    loadComponent: () =>
      import('./dropdown-items/dropdown-items.component').then(
        (e) => e.DropdownButtonComponent
      ),
  },
  {
    path: 'per-item-overrides',
    loadComponent: () =>
      import('./per-item-overrides/per-item-overrides.component').then(
        (e) => e.PerItemOverridesComponent
      ),
  },
  {
    path: 'dividers',
    loadComponent: () =>
      import('./dividers/dividers.component').then((e) => e.DividersComponent),
  },
  {
    path: 'icon-only',
    loadComponent: () =>
      import('./icon-only/icon-only.component').then(
        (e) => e.IconOnlyComponent
      ),
  },
];
