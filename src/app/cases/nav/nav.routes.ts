import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'using-decorator',
    loadComponent: () =>
      import('./using-decorator/using-decorator.component').then(
        (e) => e.UsageDecoratorComponent
      ),
  },
  {
    path: 'custom-title',
    loadComponent: () =>
      import('./custom-title/custom-title.component').then(
        (e) => e.CustomTitleComponent
      ),
  },
];
