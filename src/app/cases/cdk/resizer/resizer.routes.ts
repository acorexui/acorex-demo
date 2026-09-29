import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.ResizerUsageComponent),
  },
  {
    path: 'width-and-height',
    loadComponent: () =>
      import('./width-and-height/width-and-height.component').then(
        (e) => e.ResizerWidthAndHeightComponent,
      ),
  },
  {
    path: 'corner-resize',
    loadComponent: () =>
      import('./corner-resize/corner-resize.component').then(
        (e) => e.ResizerCornerResizeComponent,
      ),
  },
  {
    path: 'double-click',
    loadComponent: () =>
      import('./double-click-actions/double-click-actions.component').then(
        (e) => e.ResizerDoubleClickActionsComponent,
      ),
  },
];
