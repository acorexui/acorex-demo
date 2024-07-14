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
      import('./usage/usage.component').then((e) => e.PopUpUsageComponent),
  },
  {
    path: 'size',
    loadComponent: () =>
      import('./size/size.component').then((e) => e.PopUpSizeComponent),
  },
  {
    path: 'size-in-screens',
    loadComponent: () =>
      import('./size-in-screens/size-in-screens.component').then(
        (e) => e.PopUpSizeInScreenComponent
      ),
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./header/header.component').then((e) => e.PopUpHeaderComponent),
  },
];
