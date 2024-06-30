import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'summary',
    loadComponent: () =>
      import('./summary/summary.component').then((e) => e.SummaryComponent),
  },
  {
    path: 'validate',
    loadComponent: () =>
      import('./validate/validate.component').then((e) => e.ValidateOnValidateComponent),
  },];