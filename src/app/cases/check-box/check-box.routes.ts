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
    path: 'hint',
    loadComponent: () =>
      import('./hint/hint.component').then((e) => e.HintComponent),
  },
  {
    path: 'indeterminate',
    loadComponent: () =>
      import('./indeterminate/indeterminate.component').then(
        (e) => e.IndeterminateComponent
      ),
  },
  {
    path: 'disabled-readonly',
    loadComponent: () =>
      import('./disabled-readonly/disabled-readonly.component').then(
        (e) => e.DisabledReadonlyComponent
      ),
  },
  {
    path: 'loading',
    loadComponent: () =>
      import('./loading/loading.component').then((e) => e.LoadingComponent),
  },
  {
    path: 'colors',
    loadComponent: () =>
      import('./colors/colors.component').then((e) => e.ColorsComponent),
  },
  {
    path: 'validation',
    loadComponent: () =>
      import('./validation/validation.component').then(
        (e) => e.ValidationComponent
      ),
  },
];
