import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'usage' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((m) => m.UsageComponent),
  },
  {
    path: 'non-searchable',
    loadComponent: () =>
      import('./non-searchable/non-searchable.component').then(
        (m) => m.NonSearchableComponent
      ),
  },
  {
    path: 'using-decorators',
    loadComponent: () =>
      import('./using-decorators/using-decorators.component').then(
        (m) => m.UsingDecoratorsComponent
      ),
  },
  {
    path: 'custom-header-footer',
    loadComponent: () =>
      import('./custom-header-footer/custom-header-footer.component').then(
        (m) => m.CustomHeaderFooterComponent
      ),
  },
  {
    path: 'custom-empty-template',
    loadComponent: () =>
      import('./custom-empty-template/custom-empty-template.component').then(
        (m) => m.CustomEmptyTemplateComponent
      ),
  },
  {
    path: 'custom-templates',
    loadComponent: () =>
      import('./custom-templates/custom-templates.component').then(
        (m) => m.CustomTemplatesComponent
      ),
  },
];
