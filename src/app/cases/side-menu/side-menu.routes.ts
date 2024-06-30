import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },

  {
    path: 'background-text',
    loadComponent: () =>
      import('./background-text/background-text.component').then(
        (e) => e.BackgroundTextComponent
      ),
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
