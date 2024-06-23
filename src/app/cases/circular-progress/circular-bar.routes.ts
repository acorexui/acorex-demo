import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'usage',
        loadComponent: () =>
            import('./usage/usage.component').then((e) => e.UsageComponent),
    },
    {
        path: 'using-content-inside',
        loadComponent: () =>
            import(
                './using-content-inside/using-content-inside.component'
            ).then((e) => e.UsingContentInsidComponent),
    },
    {
        path: 'customization',
        loadComponent: () =>
            import('./customization/customization.component').then(
                (e) => e.CustomizationComponent,
            ),
    },
];
