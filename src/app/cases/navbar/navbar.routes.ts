import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'simple-usage', pathMatch: 'full' },
  {
    path: 'simple-usage',
    loadComponent: () =>
      import('./simple-usage/simple-usage.component').then((e) => e.UsageDecoratorComponent),
  },
];
