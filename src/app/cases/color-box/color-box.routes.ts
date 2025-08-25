import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'disable',
    loadComponent: () =>
      import('./disable/disable.component').then((e) => e.DisableComponent),
  },
  {
    path: 'read-only',
    loadComponent: () =>
      import('./read-only/read-only.component').then(
        (e) => e.ReadOnlyComponent
      ),
  },
  {
    path: 'using-decorators',
    loadComponent: () =>
      import('./using-decorators/using-decorators.component').then(
        (e) => e.UsingDecoratorsComponent
      ),
  },
  {
    path: 'visual-toggles',
    loadComponent: () =>
      import('./visual-toggles/visual-toggles.component').then(
        (e) => e.VisualTogglesComponent
      ),
  },
  {
    path: 'clear-behavior',
    loadComponent: () =>
      import('./clear-behavior/clear-behavior.component').then(
        (e) => e.ClearBehaviorComponent
      ),
  },
];
