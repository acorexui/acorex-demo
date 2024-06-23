import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'usage',
        loadComponent: () =>
            import('./usage/usage.component').then((e) => e.UsageComponent),
    },

    {
        path: 'use-decorators',
        loadComponent: () =>
            import('./use-decorators/use-decorators.component').then(
                (e) => e.UseDecoratorsComponent,
            ),
    },

    {
        path: 'multi-level',
        loadComponent: () =>
            import('./multi-level/multi-level.component').then(
                (e) => e.MultiLevelComponent,
            ),
    },
];
