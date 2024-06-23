import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'usage',
        loadComponent: () =>
            import('./usage/usage.component').then((e) => e.UsageComponent),
    },

    {
        path: 'text-mode',
        loadComponent: () =>
            import('./text-mode/text-mode.component').then(
                (e) => e.TextModeComponent,
            ),
    },

    {
        path: 'icon-mode',
        loadComponent: () =>
            import('./icon-mode/icon-mode.component').then(
                (e) => e.IconModeComponent,
            ),
    },

    {
        path: 'image-mode',
        loadComponent: () =>
            import('./image-mode/image-mode.component').then(
                (e) => e.ImageModeComponent,
            ),
    },
    {
        path: 'size',
        loadComponent: () =>
            import('./size/size.component').then((e) => e.TextModeComponent),
    },
];
