import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'custom-icon',
    loadComponent: () =>
      import('./custom-icon/custom-icon.component').then(
        (e) => e.CustomIconComponent
      ),
  },
  {
    path: 'max-values',
    loadComponent: () =>
      import('./max-values/max-values.component').then(
        (e) => e.MaxValuesComponent
      ),
  },
  {
    path: 'step-precision',
    loadComponent: () =>
      import('./step-precision/step-precision.component').then(
        (e) => e.StepPrecisionComponent
      ),
  },
  {
    path: 'transitions',
    loadComponent: () =>
      import('./transitions/transitions.component').then(
        (e) => e.TransitionsComponent
      ),
  },
  {
    path: 'states',
    loadComponent: () =>
      import('./states/states.component').then((e) => e.StatesComponent),
  },
  {
    path: 'icons',
    loadComponent: () =>
      import('./icons/icons.component').then((e) => e.IconsComponent),
  },
  {
    path: 'sizes',
    loadComponent: () =>
      import('./sizes/sizes.component').then((e) => e.SizesComponent),
  },
];
