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
    path: 'size',
    loadComponent: () =>
      import('./size/size.component').then((e) => e.TextModeComponent),
  },
  {
    path: 'text-mode',
    loadComponent: () =>
      import('./text-mode/text-mode.component').then(
        (e) => e.TextModeComponent
      ),
  },
  {
    path: 'icon-mode',
    loadComponent: () =>
      import('./icon-mode/icon-mode.component').then(
        (e) => e.IconModeComponent
      ),
  },
  {
    path: 'image-mode',
    loadComponent: () =>
      import('./image-mode/image-mode.component').then(
        (e) => e.ImageModeComponent
      ),
  },
  {
    path: 'look',
    loadComponent: () =>
      import('./look/look.component').then((e) => e.LookComponent),
  },
  {
    path: 'shape',
    loadComponent: () =>
      import('./shape/shape.component').then((e) => e.ShapeComponent),
  },
  {
    path: 'avatar-group',
    loadComponent: () =>
      import('./avatar-group/avatar-group.component').then(
        (e) => e.AvatarGroupComponent
      ),
  },
  {
    path: 'defaults',
    loadComponent: () =>
      import('./defaults/defaults.component').then((e) => e.DefaultsComponent),
  },
  {
    path: 'content',
    loadComponent: () =>
      import('./content/content.component').then((e) => e.ContentComponent),
  },
  {
    path: 'group',
    loadComponent: () =>
      import('./group/group.component').then((e) => e.GroupComponent),
  },
];
