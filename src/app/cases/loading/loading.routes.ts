import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'region',
        loadComponent: () =>
            import('./region/region.component').then((e) => e.RegionComponent),
    },
    {
        path: 'spinner-color',
        loadComponent: () =>
            import('./spinner-color/spinner-color.component').then(
                (e) => e.SpinnerColorComponent,
            ),
    },
    {
        path: 'spinner-size',
        loadComponent: () =>
            import('./spinner-size/spinner-size.component').then(
                (e) => e.SpinnerSizeComponent,
            ),
    },
    {
        path: 'spinner-size-size',
        loadComponent: () =>
            import('./spinner-size-size/spinner-size-size.component').then(
                (e) => e.SpinnerSizeSizeComponent,
            ),
    },
    {
        path: 'loading-spinner',
        loadComponent: () =>
            import('./loading-spinner/loading-spinner.component').then(
                (e) => e.LoadingSpinnerComponent,
            ),
    },
];
