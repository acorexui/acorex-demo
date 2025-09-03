import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'orientation',
    loadComponent: () =>
      import('./orientation/orientation.component').then(
        (e) => e.OrientationComponent
      ),
  },
];
