import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'clear-button', pathMatch: 'full' },
  {
    path: 'clear-button',
    loadComponent: () =>
      import('./clear-button/clear-button.component').then(
        (e) => e.ClearButtonComponent
      ),
  },
  {
    path: 'close-button',
    loadComponent: () =>
      import('./close-button/close-button.component').then(
        (e) => e.CloseButtonComponent
      ),
  },
  {
    path: 'color-indicator',
    loadComponent: () =>
      import('./color-indicator/color-indicator.component').then(
        (e) => e.ColorIndicatorComponent
      ),
  },
  {
    path: 'full-screen-button',
    loadComponent: () =>
      import('./full-screen-button/full-screen-button.component').then(
        (e) => e.FullScreenButtonComponent
      ),
  },
  {
    path: 'generic-content',
    loadComponent: () =>
      import('./generic-content/generic-content.component').then(
        (e) => e.GenericContentComponent
      ),
  },
  {
    path: 'heading',
    loadComponent: () =>
      import('./heading/heading.component').then((e) => e.HeadingComponent),
  },
  {
    path: 'icon',
    loadComponent: () =>
      import('./icon/icon.component').then((e) => e.IconComponent),
  },
];
