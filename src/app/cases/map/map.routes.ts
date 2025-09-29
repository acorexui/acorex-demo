import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'markers',
    loadComponent: () =>
      import('./markers/markers.component').then((e) => e.MarkersDemoComponent),
  },
  {
    path: 'polygons',
    loadComponent: () =>
      import('./polygons/polygons.component').then(
        (e) => e.PolygonsDemoComponent
      ),
  },
  {
    path: 'location',
    loadComponent: () =>
      import('./location/location.component').then(
        (e) => e.LocationDemoComponent
      ),
  },
  {
    path: 'draw-controls',
    loadComponent: () =>
      import('./draw-controls/draw-controls.component').then(
        (e) => e.DrawControlsDemoComponent
      ),
  },
  {
    path: 'boundary',
    loadComponent: () =>
      import('./boundary/boundary.component').then(
        (e) => e.BoundaryDemoComponent
      ),
  },
  {
    path: 'popup',
    loadComponent: () =>
      import('./popup/popup.component').then((e) => e.PopupDemoComponent),
  },
  {
    path: 'fitbounds',
    loadComponent: () =>
      import('./fitbounds/fitbounds.component').then(
        (e) => e.FitBoundsDemoComponent
      ),
  },
  {
    path: 'poi',
    loadComponent: () =>
      import('./poi/poi.component').then((e) => e.PoiDemoComponent),
  },
];
