import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'accordion-mode',
    loadComponent: () =>
      import('./accordion-mode/accordion-mode.component').then(
        (e) => e.AccordionMode
      ),
  },
  {
    path: 'header-icon',
    loadComponent: () =>
      import('./header-icon/header-icon.component').then((e) => e.HeaderIcon),
  },
  {
    path: 'loading',
    loadComponent: () =>
      import('./loading/loading.component').then((e) => e.LoadingComponent),
  },
  {
    path: 'custom-header-template',
    loadComponent: () =>
      import('./custom-header-template/custom-header-template.component').then(
        (e) => e.CustomHeaderTemplate
      ),
  },
];
