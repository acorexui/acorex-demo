import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'time-only',
    loadComponent: () =>
      import('./time-only/time-only.component').then(
        (e) => e.TimeOnlyComponent
      ),
  },
  {
    path: 'date-only',
    loadComponent: () =>
      import('./date-only/date-only.component').then(
        (e) => e.DateOnlyComponent
      ),
  },
  {
    path: 'min-max',
    loadComponent: () =>
      import('./min-max/min-max.component').then((e) => e.MinMaxComponent),
  },
  {
    path: 'states',
    loadComponent: () =>
      import('./states/states.component').then((e) => e.StatesComponent),
  },
  {
    path: 'looks',
    loadComponent: () =>
      import('./looks/looks.component').then((e) => e.LooksComponent),
  },
  {
    path: 'allow-typing',
    loadComponent: () =>
      import('./allow-typing/allow-typing.component').then(
        (e) => e.AllowTypingComponent
      ),
  },
  {
    path: 'calendar-types',
    loadComponent: () =>
      import('./calendar-types/calendar-types.component').then(
        (e) => e.CalendarTypesComponent
      ),
  },
];
