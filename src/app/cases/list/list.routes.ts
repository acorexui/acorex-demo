import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'multiple',
    loadComponent: () =>
      import('./multiple/multiple.component').then((e) => e.MultipleComponent),
  },
  {
    path: 'custom-header',
    loadComponent: () =>
      import('./custom-header/custom-header.component').then(
        (e) => e.CustomHeaderComponent
      ),
  },
  {
    path: 'custom-footer',
    loadComponent: () =>
      import('./custom-footer/custom-footer.component').then(
        (e) => e.CustomFooterComponent
      ),
  },
  {
    path: 'custom-item',
    loadComponent: () =>
      import('./custom-item/custom-item.component').then(
        (e) => e.CustomItemComponent
      ),
  },
  {
    path: 'custom-loading',
    loadComponent: () =>
      import('./custom-loading/custom-loading.component').then(
        (e) => e.CustomLoadingComponent
      ),
  },
];
