import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'min-max',
    loadComponent: () =>
      import('./min-max/min-max.component').then((e) => e.MinMaxComponent),
  },
  {
    path: 'disabled-holiday',
    loadComponent: () =>
      import('./disabled-holiday/disabled-holiday.component').then(
        (e) => e.DisabledHolidayComponent
      ),
  },
  {
    path: 'depth-active-view',
    loadComponent: () =>
      import('./depth-active-view/depth-active-view.component').then(
        (e) => e.DepthActiveViewComponent
      ),
  },
  {
    path: 'disabled-readonly',
    loadComponent: () =>
      import('./disabled-readonly/disabled-readonly.component').then(
        (e) => e.DisabledReadonlyComponent
      ),
  },
];
