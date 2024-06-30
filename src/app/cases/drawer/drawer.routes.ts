import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.DrawerUsageComponent),
  },
  {
    path: 'mode',
    loadComponent: () =>
      import('./mode/mode.component').then((e) => e.DrawerModeComponent),
  },
  {
    path: 'location',
    loadComponent: () =>
      import('./location/location.component').then(
        (e) => e.DrawerLocationComponent
      ),
  },
];
