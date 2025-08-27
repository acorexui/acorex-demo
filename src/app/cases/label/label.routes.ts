import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.LabelUsageComponent),
  },
  {
    path: 'required',
    loadComponent: () =>
      import('./required/required.component').then(
        (e) => e.LabelRequiredComponent
      ),
  },
  {
    path: 'form-association',
    loadComponent: () =>
      import('./form-association/form-association.component').then(
        (e) => e.LabelFormAssociationComponent
      ),
  },
  {
    path: 'error-state',
    loadComponent: () =>
      import('./error-state/error-state.component').then(
        (e) => e.LabelErrorStateComponent
      ),
  },
  {
    path: 'accessibility',
    loadComponent: () =>
      import('./accessibility/accessibility.component').then(
        (e) => e.LabelAccessibilityComponent
      ),
  },
];
