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
];
