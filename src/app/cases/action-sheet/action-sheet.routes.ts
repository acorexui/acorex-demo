import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
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
    path: 'List-item-and-custom-content-together',
    loadComponent: () =>
      import(
        './List-item-and-custom-content-together/List-item-and-custom-content-together.component'
      ).then((a) => a.ActionSheetBothModeComponent),
  },
];
