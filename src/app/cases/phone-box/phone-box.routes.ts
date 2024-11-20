import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'validation', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'validation',
    loadComponent: () =>
      import('./validation/validation.component').then(
        (e) => e.ValidationComponent
      ),
  },
  {
    path: 'only-countries',
    loadComponent: () =>
      import('./only-countries/only-countries.component').then(
        (e) => e.OnlyCountriesComponent
      ),
  },
  {
    path: 'exclude',
    loadComponent: () =>
      import('./only-countries/only-countries.component').then(
        (e) => e.OnlyCountriesComponent
      ),
  },
];
