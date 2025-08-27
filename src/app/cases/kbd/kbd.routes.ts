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
    path: 'single-key',
    loadComponent: () =>
      import('./single-key/single-key.component').then(
        (e) => e.SingleKeyComponent
      ),
  },
  {
    path: 'key-combinations',
    loadComponent: () =>
      import('./key-combinations/key-combinations.component').then(
        (e) => e.KeyCombinationsComponent
      ),
  },
  {
    path: 'modifier-keys',
    loadComponent: () =>
      import('./modifier-keys/modifier-keys.component').then(
        (e) => e.ModifierKeysComponent
      ),
  },
];
