import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'splitted-button',
    loadComponent: () =>
      import('./splitted-button/splitted-button.component').then(
        (e) => e.SplittedButtonComponent
      ),
  },
  {
    path: 'drowpdown-button',
    loadComponent: () =>
      import('./drowpdown-button/dropdown-button.component').then(
        (e) => e.DropdownButtonComponent
      ),
  },
];
