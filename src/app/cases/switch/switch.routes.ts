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
    path: 'on-off',
    loadComponent: () =>
      import('./on-off/on-off.component').then((e) => e.OnOffComponent),
  },
  {
    path: 'content',
    loadComponent: () =>
      import('./content/content.component').then((e) => e.ContentComponent),
  },
  {
    path: 'on-off-content',
    loadComponent: () =>
      import('./on-off-content/on-off-content.component').then(
        (e) => e.OnOffContentComponent
      ),
  },
  {
    path: 'loading',
    loadComponent: () =>
      import('./loading/loading.component').then((e) => e.LoadingComponent),
  },
  {
    path: 'size',
    loadComponent: () =>
      import('./size/size.component').then((e) => e.SizeComponent),
  },
  {
    path: 'disabled-readonly',
    loadComponent: () =>
      import('./disabled-readonly/disabled-readonly.component').then(
        (e) => e.DisabledReadonlyComponent
      ),
  },
];
