import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'usage',
        loadComponent: () =>
            import('./usage/usage.component').then((e) => e.UsageComponent),
    },
    {
        path: 'colors',
        loadComponent: () =>
            import('./colors/colors.component').then((e) => e.ColorsComponent),
    },
    {
        path: 'usage',
        loadComponent: () =>
            import('./look/look.component').then((e) => e.LookComponent),
    },
];
