import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
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
  {
    path: 'badge-in-button',
    loadComponent: () =>
      import('./badge-in-button/badge-in-button.component').then(
        (e) => e.BadgeInButtonComponent
      ),
  },
  {
    path: 'single-character',
    loadComponent: () =>
      import('./single-character/single-character.component').then(
        (e) => e.SingleCharacterComponent
      ),
  },
];
