import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./basic/basic.component').then((m) => m.BasicContextMenuComponent),
  },
  {
    path: 'dynamic-items',
    loadComponent: () =>
      import('./dynamic-items/dynamic-items.component').then((m) => m.DynamicItemsContextMenuComponent),
  },
  {
    path: 'programmatic-open',
    loadComponent: () =>
      import('./programmatic-open/programmatic-open.component').then((m) => m.ProgrammaticOpenContextMenuComponent),
  },
];
