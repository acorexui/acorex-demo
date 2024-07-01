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
      import('./usage/usage.component').then((e) => e.PopoverUsageComponent),
  },
  {
    path: 'hover',
    loadComponent: () =>
      import('./hover/hover.component').then((e) => e.PopoverHoverComponent),
  },
  {
    path: 'leave',
    loadComponent: () =>
      import('./leave/leave.component').then((e) => e.PopoverLeaveComponent),
  },
  {
    path: 'methods',
    loadComponent: () =>
      import('./methods/methods.component').then(
        (e) => e.PopoverMethodsComponent
      ),
  },
];
