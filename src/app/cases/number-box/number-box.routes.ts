import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'change-on-scroll',
    loadComponent: () =>
      import('./change-on-scroll/change-on-scroll.component').then(
        (e) => e.ChangeOnScrollComponent,
      ),
  },
  {
    path: 'separator',
    loadComponent: () =>
      import('./separator/separator.component').then(
        (e) => e.SeparatorComponent,
      ),
  },
  {
    path: 'max-min-value',
    loadComponent: () =>
      import('./max-minvaluse/maxminvaluse.component').then(
        (e) => e.NumberBoxMaxMinValueComponent,
      ),
  },
  {
    path: 'step-size',
    loadComponent: () =>
      import('./step-size/step.component').then(
        (e) => e.NumberBoxStepSizeComponent,
      ),
  },
];
