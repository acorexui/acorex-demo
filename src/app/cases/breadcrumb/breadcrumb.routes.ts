import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },

  {
    path: 'activated-mode',
    loadComponent: () =>
      import('./activated-state/activated-state.component').then(
        (e) => e.ActivatedStateComponent
      ),
  },

  {
    path: 'disabled-mode',
    loadComponent: () =>
      import('./disabled-state/disabled-state.component').then(
        (e) => e.DisabledStateComponent
      ),
  },

  {
    path: 'icon-mode',
    loadComponent: () =>
      import('./icon-mode/icon-mode.component').then(
        (e) => e.IconModeComponent
      ),
  },
];
