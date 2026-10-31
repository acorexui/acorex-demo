import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'simple',
    loadComponent: () =>
      import('./simple/simple.component').then((e) => e.SimpleComponent),
  },
  {
    path: 'vertical-toolbar',
    loadComponent: () =>
      import('./vertical-toolbar/vertical-toolbar.component').then(
        (e) => e.VerticalToolbarComponent,
      ),
  },
  {
    path: 'custom-toolbar',
    loadComponent: () =>
      import('./custom-toolbar/custom-toolbar.component').then(
        (e) => e.CustomToolbarComponent,
      ),
  },
];
