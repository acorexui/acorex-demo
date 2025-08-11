import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
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
];
