import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usage',
    pathMatch: 'full',
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.PopUpUsageComponent),
  },
  {
    path: 'size',
    loadComponent: () =>
      import('./size/size.component').then((e) => e.PopUpSizeComponent),
  },
  {
    path: 'size-in-screens',
    loadComponent: () =>
      import('./size-in-screens/size-in-screens.component').then(
        (e) => e.PopUpSizeInScreenComponent
      ),
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./header/header.component').then((e) => e.PopUpHeaderComponent),
  },
  {
    path: 'backdrop',
    loadComponent: () =>
      import('./backdrop/backdrop.component').then((e) => e.PopUpBackdropComponent),
  },
  {
    path: 'close-on-backdrop-click',
    loadComponent: () =>
      import('./close-on-backdrop-click/close-on-backdrop-click.component').then(
        (e) => e.PopUpCloseOnBackdropClickComponent,
      ),
  },
  {
    path: 'close-on-escape',
    loadComponent: () =>
      import('./close-on-escape/close-on-escape.component').then(
        (e) => e.PopUpCloseOnEscapeComponent,
      ),
  },
  {
    path: 'draggable',
    loadComponent: () =>
      import('./draggable/draggable.component').then(
        (e) => e.PopUpDraggableComponent,
      ),
  },
  {
    path: 'minimize',
    loadComponent: () =>
      import('./minimize/minimize.component').then(
        (e) => e.PopUpMinimizeComponent,
      ),
  },
  {
    path: 'maximize',
    loadComponent: () =>
      import('./maximize/maximize.component').then(
        (e) => e.PopUpMaximizeComponent,
      ),
  },
];
