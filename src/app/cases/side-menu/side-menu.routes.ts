import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'color',
    loadComponent: () =>
      import('./color/color.component').then((e) => e.ColorComponent),
  },
  {
    path: 'customize-font',
    loadComponent: () =>
      import('./customize-font/customize-font.component').then(
        (e) => e.CustomizeFontComponent
      ),
  },
  {
    path: 'use-decorator',
    loadComponent: () =>
      import('./use-decorator/use-decorator.component').then(
        (e) => e.UseDecoratorComponent
      ),
  },
  {
    path: 'group-title',
    loadComponent: () =>
      import('./group-title/group-title.component').then(
        (e) => e.GroupTitleComponent
      ),
  },
];
