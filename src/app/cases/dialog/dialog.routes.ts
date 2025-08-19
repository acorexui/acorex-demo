import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usage',
    pathMatch: 'full',
  },
  {
    path: 'asynchronous-process',
    loadComponent: () =>
      import('./asynchronous-process/asynchronous-process.component').then(
        (e) => e.AsynchronousProcessComponent
      ),
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'confirm-default-action',
    loadComponent: () =>
      import('./confirm-default-action/confirm-default-action.component').then(
        (e) => e.ConfirmDefaultActionComponent
      ),
  },
  {
    path: 'custom-buttons',
    loadComponent: () =>
      import('./custom-buttons/custom-buttons.component').then((e) => e.CustomButtonsComponent),
  },
  {
    path: 'programmatic-open',
    loadComponent: () =>
      import('./programmatic-open/programmatic-open.component').then(
        (e) => e.ProgrammaticOpenComponent
      ),
  },
];
