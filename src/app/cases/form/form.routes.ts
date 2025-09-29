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
    path: 'label',
    loadComponent: () =>
      import('./label/label.component').then((e) => e.LabelComponent),
  },
  {
    path: 'look',
    loadComponent: () =>
      import('./look/look.component').then((e) => e.LookComponent),
  },
  {
    path: 'messageStyle',
    loadComponent: () =>
      import('./messageStyle/messageStyle.component').then(
        (e) => e.MessageStyleComponent
      ),
  },
  {
    path: 'updateOn',
    loadComponent: () =>
      import('./updateOn/updateOn.component').then((e) => e.UpdateOnComponent),
  },
  {
    path: 'summary',
    loadComponent: () =>
      import('./summary/summary.component').then((e) => e.SummaryComponent),
  },
  {
    path: 'validate',
    loadComponent: () =>
      import('./validate/validate.component').then(
        (e) => e.ValidateOnValidateComponent
      ),
  },
];
