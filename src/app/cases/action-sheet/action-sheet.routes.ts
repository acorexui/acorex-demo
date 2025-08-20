import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((a) => a.UsageComponent),
  },
  {
    path: 'custom-content',
    loadComponent: () =>
      import('./custom-content/custom-content.component').then(
        (a) => a.ActionSheetCustomContentComponent
      ),
  },
  {
    path: 'both-mode',
    loadComponent: () =>
      import('./both-mode/both-mode.component').then(
        (a) => a.ActionSheetBothModeComponent
      ),
  },
  {
    path: 'draggable',
    loadComponent: () =>
      import('./draggable/draggable.component').then(
        (a) => a.DraggableComponent
      ),
  },
  {
    path: 'lifecycle-events',
    loadComponent: () =>
      import('./lifecycle-events/lifecycle-events.component').then(
        (m) => m.LifecycleEventsComponent
      ),
  },
  {
    path: 'drag-up-fullscreen',
    loadComponent: () =>
      import('./drag-up-fullscreen/drag-up-fullscreen.component').then(
        (m) => m.DragUpFullscreenComponent
      ),
  },
];
