import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'indeterminate',
    loadComponent: () =>
      import('./indeterminate/indeterminate.component').then(
        (e) => e.IndeterminateComponent
      ),
  },
  {
    path: 'multiple-buttons',
    loadComponent: () =>
      import('./multiple-buttons/multiple-buttons.component').then(
        (e) => e.MultipleButtonsComponent
      ),
  },
  {
    path: 'button-states',
    loadComponent: () =>
      import('./button-states/button-states.component').then(
        (e) => e.ButtonStatesComponent
      ),
  },
  {
    path: 'progress-colors',
    loadComponent: () =>
      import('./progress-colors/progress-colors.component').then(
        (e) => e.ProgressColorsComponent
      ),
  },
  {
    path: 'dynamic-updates',
    loadComponent: () =>
      import('./dynamic-updates/dynamic-updates.component').then(
        (e) => e.DynamicUpdatesComponent
      ),
  },
  {
    path: 'no-buttons',
    loadComponent: () =>
      import('./no-buttons/no-buttons.component').then(
        (e) => e.NoButtonsComponent
      ),
  },
  {
    path: 'long-text',
    loadComponent: () =>
      import('./long-text/long-text.component').then(
        (e) => e.LongTextComponent
      ),
  },
  {
    path: 'accessibility',
    loadComponent: () =>
      import('./accessibility/accessibility.component').then(
        (e) => e.AccessibilityComponent
      ),
  },
];
