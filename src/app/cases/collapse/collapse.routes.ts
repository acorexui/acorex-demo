import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'disabled',
    loadComponent: () =>
      import('./disabled/disabled.component').then((e) => e.DisabledComponent),
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
  {
    path: 'looks',
    loadComponent: () =>
      import('./looks/looks.component').then((e) => e.LooksComponent),
  },
  {
    path: 'programmatic-control',
    loadComponent: () =>
      import('./programmatic-control/programmatic-control.component').then(
        (e) => e.ProgrammaticControlComponent
      ),
  },
  {
    path: 'active-index',
    loadComponent: () =>
      import('./active-index/active-index.component').then(
        (e) => e.ActiveIndexComponent
      ),
  },
  {
    path: 'hidden-header',
    loadComponent: () =>
      import('./hidden-header/hidden-header.component').then(
        (e) => e.HiddenHeaderComponent
      ),
  },
];
