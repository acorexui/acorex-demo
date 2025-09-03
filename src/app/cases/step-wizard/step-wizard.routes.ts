import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'methods',
    loadComponent: () =>
      import('./methods/methods.component').then((e) => e.MethodsComponent),
  },
  {
    path: 'navigation-state',
    loadComponent: () =>
      import('./navigation-state/navigation-state.component').then(
        (e) => e.NavigationStateComponent
      ),
  },
  {
    path: 'different-looks',
    loadComponent: () =>
      import('./different-looks/different-looks.component').then(
        (e) => e.DifferentLooksComponent
      ),
  },
  {
    path: 'different-sizes',
    loadComponent: () =>
      import('./different-sizes/different-sizes.component').then(
        (e) => e.DifferentSizesComponent
      ),
  },
  {
    path: 'orientation',
    loadComponent: () =>
      import('./orientation/orientation.component').then(
        (e) => e.OrientationComponent
      ),
  },
  {
    path: 'connector-options',
    loadComponent: () =>
      import('./connector-options/connector-options.component').then(
        (e) => e.ConnectorOptionsComponent
      ),
  },
  {
    path: 'interactive-steps',
    loadComponent: () =>
      import('./interactive-steps/interactive-steps.component').then(
        (e) => e.InteractiveStepsComponent
      ),
  },
];
