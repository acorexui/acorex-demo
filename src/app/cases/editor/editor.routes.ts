import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.EditorUsageComponent),
  },
  {
    path: 'disabled-state',
    loadComponent: () =>
      import('./disabled-state/disabled.component').then(
        (e) => e.DisabledComponent
      ),
  },
  {
    path: 'readonly-mode',
    loadComponent: () =>
      import('./readonly-mode/readonly.component').then(
        (e) => e.ReadonlyComponent
      ),
  },
];
