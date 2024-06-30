import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'colors',
    loadComponent: () =>
      import('./colors/colors.component').then((e) => e.ColorsComponent),
  },
  {
    path: 'look',
    loadComponent: () =>
      import('./look/look.component').then((e) => e.LookComponent),
  },
  {
    path: 'text',
    loadComponent: () =>
      import('./text/text.component').then((e) => e.TextComponent),
  },
  {
    path: 'mini-badge',
    loadComponent: () =>
      import('./mini-badge/mini-badge.component').then(
        (e) => e.MiniBadgeComponent
      ),
  },
];
