import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'simple-usage', pathMatch: 'full' },
  {
    path: 'simple-usage',
    loadComponent: () =>
      import('./simple-usage/simple-usage.component').then(
        (e) => e.UsageDecoratorComponent
      ),
  },
  {
    path: 'look-variants',
    loadComponent: () =>
      import('./look-variants/look-variants.component').then(
        (e) => e.LookVariantsComponent
      ),
  },
  {
    path: 'content-projection',
    loadComponent: () =>
      import('./content-projection/content-projection.component').then(
        (e) => e.ContentProjectionComponent
      ),
  },
];
