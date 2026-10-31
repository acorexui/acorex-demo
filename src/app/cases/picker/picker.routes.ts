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
      import('./usage/usage.component').then((b) => b.UsageComponent),
  },
  {
    path: 'text',
    loadComponent: () =>
      import('./text/text.component').then((b) => b.PickerTextComponent),
  },
  {
    path: 'date',
    loadComponent: () =>
      import('./date/date.component').then((b) => b.PickerDateComponent),
  },
  {
    path: 'fade',
    loadComponent: () =>
      import('./fade/fade.component').then((b) => b.PickerFadeComponent),
  },
];
