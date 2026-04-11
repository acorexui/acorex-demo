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
    path: 'tooltip',
    loadComponent: () =>
      import('./tooltip/tooltip.component').then((e) => e.TooltipComponent),
  },
  {
    path: 'label',
    loadComponent: () =>
      import('./label/label.component').then((e) => e.LabelComponent),
  },
];
