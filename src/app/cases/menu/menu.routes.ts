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
    path: 'use-decorators',
    loadComponent: () =>
      import('./use-decorators/use-decorators.component').then(
        (e) => e.UseDecoratorsComponent
      ),
  },
  {
    path: 'multi-level',
    loadComponent: () =>
      import('./multi-level/multi-level.component').then(
        (e) => e.MultiLevelComponent
      ),
  },
  {
    path: 'vertical',
    loadComponent: () =>
      import('./vertical/vertical.component').then((e) => e.VerticalComponent),
  },
  {
    path: 'data-driven',
    loadComponent: () =>
      import('./data-driven/data-driven.component').then(
        (e) => e.DataDrivenComponent
      ),
  },
  {
    path: 'open-close',
    loadComponent: () =>
      import('./open-close/open-close.component').then(
        (e) => e.OpenCloseComponent
      ),
  },
  {
    path: 'disabled',
    loadComponent: () =>
      import('./disabled/disabled.component').then((e) => e.DisabledComponent),
  },
  {
    path: 'color',
    loadComponent: () =>
      import('./color/color.component').then((e) => e.ColorComponent),
  },
  {
    path: 'hide-arrows',
    loadComponent: () =>
      import('./hide-arrows/hide-arrows.component').then(
        (e) => e.HideArrowsComponent
      ),
  },
  {
    path: 'dividers',
    loadComponent: () =>
      import('./dividers/dividers.component').then((e) => e.DividersComponent),
  },
  {
    path: 'programmatic-close',
    loadComponent: () =>
      import('./programmatic-close/programmatic-close.component').then(
        (e) => e.ProgrammaticCloseComponent
      ),
  },
  {
    path: 'rtl',
    loadComponent: () =>
      import('./rtl/rtl.component').then((e) => e.RtlComponent),
  },
  {
    path: 'scrollable',
    loadComponent: () =>
      import('./scrollable/scrollable.component').then(
        (e) => e.ScrollableComponent
      ),
  },
];
