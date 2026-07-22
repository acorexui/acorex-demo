import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'year-range',
    loadComponent: () =>
      import('./year-range/year-range.component').then((e) => e.YearRangeComponent),
  },{
    path: 'calendar-look',
    loadComponent: () =>
      import('./calendar-look/calendar-look.component').then((e) => e.CalendarLookComponent),
  },
  {
    path: 'picker',
    loadComponent: () =>
      import('./picker/picker.component').then((e) => e.PickerComponent),
  },
  {
    path: 'type',
    loadComponent: () =>
      import('./type/type.component').then((e) => e.TypeComponent),
  },
  {
    path: 'states',
    loadComponent: () =>
      import('./states/states.component').then((e) => e.StatesComponent),
  },
  {
    path: 'constraints',
    loadComponent: () =>
      import('./constraints/constraints.component').then(
        (e) => e.ConstraintsComponent
      ),
  },
];
