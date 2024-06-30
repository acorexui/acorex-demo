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
    path: 'item-template',
    loadComponent: () =>
      import('./item-template/item-template.component').then(
        (e) => e.ItemTemplateComponent
      ),
  },
  {
    path: 'loading-template',
    loadComponent: () =>
      import('./loading-template/loading-template.component').then(
        (e) => e.LoadingTemplateComponent
      ),
  },
  {
    path: 'empty-template',
    loadComponent: () =>
      import('./empty-template/empty-template.component').then(
        (e) => e.EmptyTemplateComponent
      ),
  },
];
