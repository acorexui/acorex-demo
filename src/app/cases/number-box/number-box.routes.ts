import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'change-on-scroll',
    loadComponent: () =>
      import('./change-on-scroll/change-on-scroll.component').then(
        (e) => e.ChangeOnScrollComponent
      ),
  },
  {
    path: 'separator',
    loadComponent: () =>
      import('./separator/separator.component').then(
        (e) => e.SeparatorComponent
      ),
  },
];
