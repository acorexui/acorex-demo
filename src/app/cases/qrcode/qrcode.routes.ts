import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'logo',
    loadComponent: () =>
      import('./logo/logo.component').then((e) => e.LogoComponent),
  },
  {
    path: 'output-types',
    loadComponent: () =>
      import('./output-types/output-types.component').then(
        (e) => e.OutputTypesComponent
      ),
  },
  {
    path: 'error-levels',
    loadComponent: () =>
      import('./error-levels/error-levels.component').then(
        (e) => e.ErrorLevelsComponent
      ),
  },
  {
    path: 'sizes',
    loadComponent: () =>
      import('./sizes/sizes.component').then((e) => e.SizesComponent),
  },
  {
    path: 'colors',
    loadComponent: () =>
      import('./colors/colors.component').then((e) => e.ColorsComponent),
  },
];
