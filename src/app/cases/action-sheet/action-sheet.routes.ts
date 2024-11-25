import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((a) => a.UsageComponent),
  },
  {
    path: 'list-item',
    loadComponent: () =>
      import('./list-item/list-item.component').then(
        (a) => a.ActionSheetListItemComponent
      ),
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
    path: 'on-close',
    loadComponent: () =>
      import('./on-close/on-close.component').then(
        (a) => a.ActionSheetOnCloseComponent
      ),
  },
];
