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
    path: 'modes',
    loadComponent: () =>
      import('./modes/modes.component').then((e) => e.ModesComponent),
  },
  {
    path: 'interactive',
    loadComponent: () =>
      import('./interactive/interactive.component').then(
        (e) => e.InteractiveComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./styling/styling.component').then((e) => e.StylingComponent),
  },
  {
    path: 'custom',
    loadComponent: () =>
      import('./custom/custom.component').then((e) => e.CustomComponent),
  },
];
