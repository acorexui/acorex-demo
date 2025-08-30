import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'length',
    loadComponent: () =>
      import('./length/length.component').then((e) => e.LengthComponent),
  },
  {
    path: 'copy-paste',
    loadComponent: () =>
      import('./copy-paste/copy-paste.component').then(
        (e) => e.CopyPasteComponent
      ),
  },
  {
    path: 'validation',
    loadComponent: () =>
      import('./validation/validation.component').then(
        (e) => e.ValidationComponent
      ),
  },
  {
    path: 'auto-focus',
    loadComponent: () =>
      import('./auto-focus/auto-focus.component').then(
        (e) => e.AutoFocusComponent
      ),
  },
  {
    path: 'looks',
    loadComponent: () =>
      import('./looks/looks.component').then((e) => e.LooksComponent),
  },
  {
    path: 'states',
    loadComponent: () =>
      import('./states/states.component').then((e) => e.StatesComponent),
  },
  {
    path: 'disabled-readonly',
    loadComponent: () =>
      import('./disabled-readonly/disabled-readonly.component').then(
        (e) => e.DisabledReadonlyComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./events/events.component').then((e) => e.EventsComponent),
  },
];
