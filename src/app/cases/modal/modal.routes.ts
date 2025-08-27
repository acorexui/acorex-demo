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
    path: 'service',
    loadComponent: () =>
      import('./service/service.component').then((e) => e.ServiceComponent),
  },
  {
    path: 'template',
    loadComponent: () =>
      import('./template/template.component').then((e) => e.TemplateComponent),
  },
  {
    path: 'sizes',
    loadComponent: () =>
      import('./sizes/sizes.component').then((e) => e.SizesComponent),
  },
  {
    path: 'draggable',
    loadComponent: () =>
      import('./draggable/draggable.component').then(
        (e) => e.DraggableComponent
      ),
  },
  {
    path: 'minimize-maximize',
    loadComponent: () =>
      import('./minimize-maximize/minimize-maximize.component').then(
        (e) => e.MinimizeMaximizeComponent
      ),
  },
  {
    path: 'backdrop-options',
    loadComponent: () =>
      import('./backdrop-options/backdrop-options.component').then(
        (e) => e.BackdropOptionsComponent
      ),
  },
];
