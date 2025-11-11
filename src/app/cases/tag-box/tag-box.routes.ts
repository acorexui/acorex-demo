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
    path: 'auto-complete',
    loadComponent: () =>
      import('./auto-complete/auto-complete.component').then(
        (e) => e.AutoCompleteComponent
      ),
  },
  {
    path: 'custom-templates',
    loadComponent: () =>
      import('./custom-templates/custom-templates.component').then(
        (e) => e.CustomTemplatesComponent
      ),
  },
  {
    path: 'header-footer-templates',
    loadComponent: () =>
      import('./header-footer-templates/header-footer-templates.component').then(
        (e) => e.HeaderFooterTemplatesComponent
      ),
  },
];
