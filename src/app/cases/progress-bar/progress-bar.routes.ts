import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'usage',
        loadComponent: () =>
            import('./usage/usage.component').then((e) => e.UsageComponent),
    },
    {
        path: 'using-decorators',
        loadComponent: () =>
            import('./using-decorators/using-decorators.component').then(
                (e) => e.UsingDecoratorsComponent,
            ),
    },
    {
        path: 'custom-height',
        loadComponent: () =>
            import('./custom-height/custom-height.component').then(
                (e) => e.CustomHeightComponent,
            ),
    },
];
