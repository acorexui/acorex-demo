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
        (e) => e.CustomizeFontComponent,
      ),
  },
  {
    path: 'use-decorator',
    loadComponent: () =>
      import('./use-decorator/use-decorator.component').then(
        (e) => e.UseDecoratorComponent,
      ),
  },
  {
    path: 'group-title',
    loadComponent: () =>
      import('./group-title/group-title.component').then(
        (e) => e.GroupTitleComponent,
      ),
  },
  {
    path: 'looks',
    loadComponent: () =>
      import('./looks/looks.component').then((e) => e.LooksComponent),
  },
  {
    path: 'compact',
    loadComponent: () =>
      import('./compact/compact.component').then((e) => e.compactComponent),
  },
  {
    path: 'indicator-location',
    loadComponent: () =>
      import('./indicator-location/indicator-location.component').then(
        (e) => e.IndicatorLocationComponent,
      ),
  },
  {
    path: 'dividers',
    loadComponent: () =>
      import('./dividers/dividers.component').then((e) => e.DividersComponent),
  },
  {
    path: 'disabled-loading',
    loadComponent: () =>
      import('./disabled-loading/disabled-loading.component').then(
        (e) => e.DisabledLoadingComponent,
      ),
  },
  {
    path: 'href-links',
    loadComponent: () =>
      import('./href-links/href-links.component').then(
        (e) => e.HrefLinksComponent,
      ),
  },
  {
    path: 'toggle-on-click',
    loadComponent: () =>
      import('./toggle-on-click/toggle-on-click.component').then(
        (e) => e.ToggleOnClickComponent,
      ),
  },
  {
    path: 'rtl',
    loadComponent: () =>
      import('./rtl/rtl.component').then((e) => e.RtlComponent),
  },
  {
    path: 'default-look-hierarchy',
    loadComponent: () =>
      import('./default-look-hierarchy/default-look-hierarchy.component').then(
        (e) => e.DefaultLookHierarchyComponent,
      ),
  },
  {
    path: 'data-driven',
    loadComponent: () =>
      import('./data-driven/data-driven.component').then(
        (e) => e.DataDrivenComponent,
      ),
  },
  {
    path: 'nested-children',
    loadComponent: () =>
      import('./nested-children/nested-children.component').then(
        (e) => e.NestedChildrenComponent,
      ),
  },
];
