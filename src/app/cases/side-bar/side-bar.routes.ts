import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'custom-background',
    loadComponent: () =>
      import('./custom-background/custom-background.component').then(
        (e) => e.CustomBackgroundComponent,
      ),
  },

];
