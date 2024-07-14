import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'custom-template', pathMatch: 'full' },
  {
    path: 'custom-template',
    loadComponent: () =>
      import('./custom-template/custom-template.component').then((e) => e.CustomTemplateComponent),
  },
];
