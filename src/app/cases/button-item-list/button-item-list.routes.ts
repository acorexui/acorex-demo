import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then(
        (m) => m.ButtonItemListUsageComponent
      ),
  },
  {
    path: 'with-items-array',
    loadComponent: () =>
      import('./with-items-array/with-items-array.component').then(
        (m) => m.ButtonItemListWithItemsArrayComponent
      ),
  },
  {
    path: 'mixed-content',
    loadComponent: () =>
      import('./mixed-content/mixed-content.component').then(
        (m) => m.ButtonItemListMixedContentComponent
      ),
  },
  {
    path: 'with-dividers',
    loadComponent: () =>
      import('./with-dividers/with-dividers.component').then(
        (m) => m.ButtonItemListWithDividersComponent
      ),
  },
  {
    path: 'disabled-state',
    loadComponent: () =>
      import('./disabled-state/disabled-state.component').then(
        (m) => m.ButtonItemListDisabledStateComponent
      ),
  },
  {
    path: 'color-variants',
    loadComponent: () =>
      import('./color-variants/color-variants.component').then(
        (m) => m.ButtonItemListColorVariantsComponent
      ),
  },
  {
    path: 'selected-state',
    loadComponent: () =>
      import('./selected-state/selected-state.component').then(
        (m) => m.ButtonItemListSelectedStateComponent
      ),
  },
];
