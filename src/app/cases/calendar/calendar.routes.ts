import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'type',
    loadComponent: () =>
      import('./type/type.component').then((e) => e.TypeComponent),
  },
  {
    path: 'depth',
    loadComponent: () =>
      import('./depth/depth.component').then((e) => e.DepthComponent),
  },
  {
    path: 'disabled-dates',
    loadComponent: () =>
      import('./disabled-dates/disabled-dates.component').then(
        (e) => e.DisabledDates
      ),
  },
  {
    path: 'holiday',
    loadComponent: () =>
      import('./holiday/holiday.component').then((e) => e.HolidayComponent),
  },
];
