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
    path: 'styling',
    loadComponent: () =>
      import('./styling/styling.component').then((e) => e.StylingComponent),
  },
  // {
  //   path: 'animation',
  //   loadComponent: () =>
  //     import('./animation/animation.component').then(
  //       (e) => e.AnimationComponent
  //     ),
  // },
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
    path: 'direction',
    loadComponent: () =>
      import('./direction/direction.component').then(
        (e) => e.DirectionComponent
      ),
  },
  {
    path: 'custom-template',
    loadComponent: () =>
      import('./custom-template/custom-template.component').then(
        (e) => e.CustomTemplateComponent
      ),
  },
];
