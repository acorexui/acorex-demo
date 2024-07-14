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
];
