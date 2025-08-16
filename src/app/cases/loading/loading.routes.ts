import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'region',
    loadComponent: () =>
      import('./region/region.component').then((e) => e.RegionComponent),
  },
  {
    path: 'directive',
    loadComponent: () =>
      import('./directive/directive.component').then(
        (e) => e.DirectiveComponent
      ),
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'service-overlay',
    loadComponent: () =>
      import('./service-overlay/service-overlay.component').then(
        (e) => e.ServiceOverlayComponent
      ),
  },
  {
    path: 'service-doloading',
    loadComponent: () =>
      import('./service-doloading/service-doloading.component').then(
        (e) => e.ServiceDoloadingComponent
      ),
  },
  {
    path: 'multi-loader-state',
    loadComponent: () =>
      import('./multi-loader-state/multi-loader-state.component').then(
        (e) => e.MultiLoaderStateComponent
      ),
  },
  {
    path: 'context',
    loadComponent: () =>
      import('./context/context.component').then((e) => e.ContextComponent),
  },
  {
    path: 'custom-spinner',
    loadComponent: () =>
      import('./custom-spinner/custom-spinner.component').then(
        (e) => e.CustomSpinnerComponent
      ),
  },
  {
    path: 'spinner-color',
    loadComponent: () =>
      import('./spinner-color/spinner-color.component').then(
        (e) => e.SpinnerColorComponent
      ),
  },
  {
    path: 'spinner-text',
    loadComponent: () =>
      import('./spinner-text/spinner-text.component').then(
        (e) => e.SpinnerTextComponent
      ),
  },
  {
    path: 'spinner-contrast',
    loadComponent: () =>
      import('./spinner-contrast/spinner-contrast.component').then(
        (e) => e.SpinnerContrastComponent
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
