import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'selectone',
    loadComponent: () =>
      import('./select-one/select-one.component').then(
        (e) => e.SelectOneComponent
      ),
  },
];
