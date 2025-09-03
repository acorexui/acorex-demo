import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'decimal',
    loadComponent: () =>
      import('./decimal/decimal.component').then((e) => e.DecimalComponent),
  },
  {
    path: 'digits',
    loadComponent: () =>
      import('./digits/digits.component').then((e) => e.DigitsComponent),
  },
  {
    path: 'hijri-date',
    loadComponent: () =>
      import('./hijri-date/hijri-date.component').then(
        (e) => e.HijriDateComponent
      ),
  },
  {
    path: 'min-and-max-value',
    loadComponent: () =>
      import('./min-and-max-value/min-and-max-value.component').then(
        (e) => e.MinAndMaxValueComponent
      ),
  },
  {
    path: 'thousands-separator',
    loadComponent: () =>
      import('./thousands-separator/thousands-separator.component').then(
        (e) => e.ThousandsSeparatorComponent
      ),
  },
];
