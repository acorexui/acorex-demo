import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'auto-complete',
    loadComponent: () =>
      import('./auto-complete/auto-complete.component').then(
        (e) => e.AutoCompleteComponent
      ),
  },
  {
    path: 'clear-button',
    loadComponent: () =>
      import('./clear-button/clear-button.component').then(
        (e) => e.ClearButtonComponent
      ),
  },
  {
    path: 'read-only-disable',
    loadComponent: () =>
      import('./read-only-disable/read-only-disable.component').then(
        (e) => e.ReadOnlyDisableComponent
      ),
  },
  {
    path: 'toggle',
    loadComponent: () =>
      import('./toggle/toggle.component').then((e) => e.ToggleComponent),
  },
];
