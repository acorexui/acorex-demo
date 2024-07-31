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
    path: 'swatches',
    loadComponent: () =>
      import('./swatches/swatches.component').then((e) => e.SwatchesComponent),
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./inputs/inputs.component').then((e) => e.InputsComponent),
  },
  {
    path: 'preview',
    loadComponent: () =>
      import('./preview/preview.component').then((e) => e.PreviewComponent),
  },
  {
    path: 'full-options',
    loadComponent: () =>
      import('./full-options/full-options.component').then(
        (e) => e.FullOptionsComponent
      ),
  },
];
