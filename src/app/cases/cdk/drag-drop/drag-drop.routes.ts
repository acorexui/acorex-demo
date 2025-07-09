import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'axis-lock',
    loadComponent: () =>
      import('./axis-lock/axis-lock.component').then(
        (e) => e.AxisLockComponent
      ),
  },
  {
    path: 'boundary',
    loadComponent: () =>
      import('./boundary/boundary.component').then((e) => e.BoundaryComponent),
  },
  {
    path: 'drag-handle',
    loadComponent: () =>
      import('./drag-handle/drag-handle.component').then(
        (e) => e.DragHandleComponent
      ),
  },
  {
    path: 'drop-zone',
    loadComponent: () =>
      import('./drop-zone/drop-zone.component').then(
        (e) => e.DropZoneComponent
      ),
  },
  {
    path: 'clone-drag',
    loadComponent: () =>
      import('./clone-drag/clone-drag.component').then(
        (e) => e.CloneDragComponent
      ),
  },
  {
    path: 'drop-list',
    loadComponent: () =>
      import('./drop-list/drop-list.component').then(
        (e) => e.DropListComponent
      ),
  },
  {
    path: 'connected-lists',
    loadComponent: () =>
      import('./connected-lists/connected-lists.component').then(
        (e) => e.ConnectedListsComponent
      ),
  },
];
