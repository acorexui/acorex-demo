import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'usage',
        loadComponent: () =>
            import('./usage/usage.component').then((e) => e.UsageComponent),
    },

    {
        path: 'counter',
        loadComponent: () =>
            import('./counter/counter.component').then(
                (e) => e.CounterComponent,
            ),
    },

    {
        path: 'counter-max-length',
        loadComponent: () =>
            import('./counter-max-length/counter-max-length.component').then(
                (e) => e.CounterMaxLengthComponent,
            ),
    },

    {
        path: 'rows',
        loadComponent: () =>
            import('./rows/rows.component').then((e) => e.RowsComponent),
    },
];
