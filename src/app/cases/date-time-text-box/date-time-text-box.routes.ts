import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'keyboard-editing',
    loadComponent: () =>
      import('./keyboard-editing/keyboard-editing.component').then(
        (e) => e.KeyboardEditingComponent,
      ),
  },
  {
    path: 'date-only',
    loadComponent: () =>
      import('./date-only/date-only.component').then(
        (e) => e.DateOnlyComponent,
      ),
  },
  {
    path: 'time-only',
    loadComponent: () =>
      import('./time-only/time-only.component').then(
        (e) => e.TimeOnlyComponent,
      ),
  },
  {
    path: 'format',
    loadComponent: () =>
      import('./format/format.component').then((e) => e.FormatComponent),
  },
  {
    path: 'calendar-types',
    loadComponent: () =>
      import('./calendar-types/calendar-types.component').then(
        (e) => e.CalendarTypesComponent,
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
    path: 'using-decorators',
    loadComponent: () =>
      import('./using-decorators/using-decorators.component').then(
        (e) => e.UsingDecoratorsComponent,
      ),
  },
];
