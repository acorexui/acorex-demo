import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'multiple-selection',
    loadComponent: () =>
      import('./multiple-selection/multiple-selection.component').then(
        (e) => e.MultipleComponent
      ),
  },
  {
    path: 'custom-item-template',
    loadComponent: () =>
      import('./custom-item-template/custom-item-template.component').then(
        (e) => e.ItemTemplateComponent
      ),
  },
  {
    path: 'custom-loading-template',
    loadComponent: () =>
      import(
        './custom-loading-template/custom-loading-template.component'
      ).then((e) => e.LoadingTemplateComponent),
  },
  {
    path: 'custom-empty-template',
    loadComponent: () =>
      import('./custom-empty-template/custom-empty-template.component').then(
        (e) => e.EmptyTemplateComponent
      ),
  },
  {
    path: 'api-call',
    loadComponent: () =>
      import('./api-call/api-call.component').then((e) => e.ApiCallComponent),
  },
];
