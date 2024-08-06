import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'feature-title',
    loadComponent: () =>
      import('./feature-title/feature-title.component').then(
        (e) => e.FeatureTitleComponent
      ),
  },
];
