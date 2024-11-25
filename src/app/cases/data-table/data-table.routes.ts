import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'cell-template', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'cell-template',
    loadComponent: () =>
      import('./cell-template/cell-template.component').then(
        (e) => e.CellTemplateComponent
      ),
  },
  {
    path: 'empty-template',
    loadComponent: () =>
      import('./empty-template/empty-template.component').then(
        (e) => e.EmptyTemplateComponent
      ),
  },
  {
    path: 'allow-resize-and-reorder',
    loadComponent: () =>
      import(
        './allow-resize-and-reorder/allow-resize-and-reorder.component'
      ).then((e) => e.AllowResizeAndReorderComponent),
  },
];
