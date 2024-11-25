import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'decoration', pathMatch: 'full' },
  {
    path: 'decoration',
    loadComponent: () =>
      import('./decoration/decoration.component').then(
        (e) => e.DecorationComponent
      ),
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'custom-template',
    loadComponent: () =>
      import('./custom-template/custom-template.component').then(
        (e) => e.CustomTemplateComponent
      ),
  },
  {
    path: 'tab-with-content',
    loadComponent: () =>
      import('./tab-with-content/tab-with-content.component').then(
        (e) => e.TabWithContentComponent
      ),
  },
];
