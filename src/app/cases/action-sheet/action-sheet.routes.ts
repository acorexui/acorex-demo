import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'list-item',
        loadComponent: () =>
            import('./list-item/list-item.component').then(
                (a) => a.ActionSheetListItemComponent,
            ),
    },
    {
        path: 'custom-content',
        loadComponent: () =>
            import('./custom-content/custom-content.component').then(
                (a) => a.ActionSheetCustomContentComponent,
            ),
    },
    {
        path: 'both-mode',
        loadComponent: () =>
            import('./both-mode/both-mode.component').then(
                (a) => a.ActionSheetListItemComponent,
            ),
    },
];
