import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
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
    path: 'locations',
    loadComponent: () =>
      import('./locations/locations.component').then(
        (e) => e.LocationsComponent
      ),
  },
  {
    path: 'service',
    loadComponent: () =>
      import('./service/service.component').then((e) => e.ServiceComponent),
  },
];
