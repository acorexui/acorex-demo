import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'with-icon', pathMatch: 'full' },
  {
    path: 'with-icon',
    loadComponent: () =>
      import('./with-icon/with-icon.component').then(
        (e) => e.WithIconComponent
      ),
  },
  {
    path: 'no-icon',
    loadComponent: () =>
      import('./no-icon/no-icon.component').then(
        (e) => e.NoIconComponent
      ),
  },
];