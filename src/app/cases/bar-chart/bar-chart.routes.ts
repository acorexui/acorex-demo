import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usage',
    pathMatch: 'full',
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'axis',
    loadComponent: () =>
      import('./axis/axis.component').then((e) => e.AxisComponent),
  },
  {
    path: 'animation',
    loadComponent: () =>
      import('./animation/animation.component').then(
        (e) => e.AnimationComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./styling/styling.component').then((e) => e.StylingComponent),
  },
  {
    path: 'interactive',
    loadComponent: () =>
      import('./interactive/interactive.component').then(
        (e) => e.InteractiveComponent
      ),
  },
  {
    path: 'size',
    loadComponent: () =>
      import('./size/size.component').then((e) => e.SizeComponent),
  },
  {
    path: 'clustered',
    loadComponent: () =>
      import('./clustered/clustered.component').then(
        (e) => e.ClusteredComponent
      ),
  },
];
