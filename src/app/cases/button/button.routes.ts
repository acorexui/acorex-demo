import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'badge-in-button',
        loadComponent: () =>
            import('./badge-in-button/badge-in-button.component').then(
                (b) => b.BadgeInButtonComponent,
            ),
    },
    {
        path: 'decorators',
        loadComponent: () =>
            import('./decorators/decorators.component').then(
                (d) => d.DecoratorsComponent,
            ),
    },
    {
        path: 'icon-button',
        loadComponent: () =>
            import('./icon-button/icon-button.component').then(
                (i) => i.IconButtonComponent,
            ),
    },
    {
        path: 'loading-state',
        loadComponent: () =>
            import('./loading-state/loading-state.component').then(
                (l) => l.LoadingStateComponent,
            ),
    },
];
