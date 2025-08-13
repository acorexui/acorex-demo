import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'action-click',
    loadComponent: () =>
      import('./action-click/action-click.component').then(
        (e) => e.ActionClickComponent
      ),
  },
  {
    path: 'empty-state',
    loadComponent: () =>
      import('./empty-state/empty-state.component').then(
        (e) => e.EmptyStateComponent
      ),
  },
  {
    path: 'tooltips',
    loadComponent: () =>
      import('./tooltips/tooltips.component').then((e) => e.TooltipsComponent),
  },
  {
    path: 'priority',
    loadComponent: () =>
      import('./priority/priority.component').then((e) => e.PiorityComponent),
  },
  {
    path: 'drag-start-delay',
    loadComponent: () =>
      import('./drag-start-delay/drag-start-delay.component').then(
        (e) => e.DragStartDelayComponent
      ),
  },
];
