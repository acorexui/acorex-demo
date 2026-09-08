import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'custom-toolbar',
    loadComponent: () =>
      import('./custom-toolbar/custom-toolbar.component').then(
        (e) => e.customToolbarComponent,
      ),
  },
  {
    path: 'custom-aspect-ratio',
    loadComponent: () =>
      import('./custom-aspect-ratio/custom-aspect-ratio.component').then(
        (e) => e.customAspectraioComponent,
      ),
  },
];
