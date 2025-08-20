import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'decorators',
    pathMatch: 'full',
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((b) => b.UsageComponent),
  },
  {
    path: 'badge-in-button',
    loadComponent: () =>
      import('./badge-in-button/badge-in-button.component').then(
        (b) => b.BadgeInButtonComponent
      ),
  },
  {
    path: 'decorators',
    loadComponent: () =>
      import('./decorators/decorators.component').then(
        (d) => d.DecoratorsComponent
      ),
  },
  {
    path: 'icon-button',
    loadComponent: () =>
      import('./icon-button/icon-button.component').then(
        (i) => i.IconButtonComponent
      ),
  },
  {
    path: 'loading-state',
    loadComponent: () =>
      import('./loading-state/loading-state.component').then(
        (l) => l.LoadingStateComponent
      ),
  },
  {
    path: 'size',
    loadComponent: () =>
      import('./size/size.component').then((l) => l.SizeComponent),
  },
  {
    path: 'color',
    loadComponent: () =>
      import('./color/color.component').then((l) => l.ColorComponent),
  },
  {
    path: 'look',
    loadComponent: () =>
      import('./look/look.component').then((l) => l.LookComponent),
  },
  {
    path: 'toggleable-selected',
    loadComponent: () =>
      import('./toggleable-selected/toggleable-selected.component').then(
        (c) => c.ToggleableSelectedComponent
      ),
  },
  {
    path: 'form-submit-reset',
    loadComponent: () =>
      import('./form-submit-reset/form-submit-reset.component').then(
        (c) => c.FormSubmitResetComponent
      ),
  },
  {
    path: 'loading-text-async',
    loadComponent: () =>
      import('./loading-text-async/loading-text-async.component').then(
        (c) => c.LoadingTextAsyncComponent
      ),
  },
];
