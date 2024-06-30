import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'region',
    loadComponent: () =>
      import('./region/region.component').then((e) => e.RegionComponent),
  },
  {
    path: 'spinner-color',
    loadComponent: () =>
      import('./spinner-color/spinner-color.component').then(
        (e) => e.SpinnerColorComponent
      ),
  },
  {
    path: 'spinner-size',
    loadComponent: () =>
      import('./spinner-size/spinner-size.component').then(
        (e) => e.SpinnerSizeComponent
      ),
  },
  {
    path: 'spinner-stroke-size',
    loadComponent: () =>
      import('./spinner-stroke-size/spinner-stroke-size.component').then(
        (e) => e.SpinnerStrokeSizeComponent
      ),
  },
  {
    path: 'loading-spinner',
    loadComponent: () =>
      import('./loading-spinner/loading-spinner.component').then(
        (e) => e.LoadingSpinnerComponent
      ),
  },
];
