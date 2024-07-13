import { Route } from '@angular/router';
import { MasterLayoutComponent } from './shared/layout/master-layout/master-layout.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'action-sheet/list-item', pathMatch: 'full' },
  {
    path: 'action-sheet',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/action-sheet/action-sheet.routes').then((c) => c.routes),
  },
  {
    path: 'alert',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/alert/alert.routes').then((c) => c.routes),
  },
  {
    path: 'avatar',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/avatar/avatar.routes').then((c) => c.routes),
  },
  {
    path: 'badge',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/badge/badge.routes').then((c) => c.routes),
  },
  {
    path: 'bottom-navigation',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/bottom-navigation/bottom-navigation.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'breadcrumb',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/breadcrumb/breadcrumb.routes').then((c) => c.routes),
  },
  {
    path: 'button',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/button/button.routes').then((c) => c.routes),
  },
  {
    path: 'button-group',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/button-group/button-group.routes').then((c) => c.routes),
  },
  {
    path: 'calendar',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/calendar/calendar.routes').then((c) => c.routes),
  },
  {
    path: 'check-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/check-box/check-box.routes').then((c) => c.routes),
  },
  {
    path: 'chips',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/chips/chips.routes').then((c) => c.routes),
  },
  {
    path: 'circular-progress',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/circular-progress/circular-progress.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'collapse',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/collapse/collapse.routes').then((c) => c.routes),
  },
  {
    path: 'color-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/color-box/color-box.routes').then((c) => c.routes),
  },
  {
    path: 'color-palette',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/color-palette/color-palette.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'data-table',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/data-table/data-table.routes').then((c) => c.routes),
  },
  {
    path: 'drawer',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/drawer/drawer.routes').then((c) => c.routes),
  },
  {
    path: 'dropdown-button',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/dropdown-button/dropdown-button.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'form',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/form/form.routes').then((c) => c.routes),
  },
  {
    path: 'image',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/image/image.routes').then((c) => c.routes),
  },
  {
    path: 'list',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/list/list.routes').then((c) => c.routes),
  },
  {
    path: 'loading',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/loading/loading.routes').then((c) => c.routes),
  },
  {
    path: 'menu',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/menu/menu.routes').then((c) => c.routes),
  },
  {
    path: 'nav',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/nav/nav.routes').then((c) => c.routes),
  },
  {
    path: 'otp',
    component: MasterLayoutComponent,
    loadChildren: () => import('./cases/otp/otp.routes').then((c) => c.routes),
  },
  {
    path: 'popover',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/popover/popover.routes').then((c) => c.routes),
  },
  {
    path: 'progress-bar',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/progress-bar/progress-bar.routes').then((c) => c.routes),
  },
  {
    path: 'search-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/search-box/search-box.routes').then((c) => c.routes),
  },
  {
    path: 'select-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/select-box/select-box.routes').then((c) => c.routes),
  },
  {
    path: 'selection-list',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/selection-list/selection-list.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'side-menu',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/side-menu/side-menu.routes').then((c) => c.routes),
  },
  {
    path: 'tag',
    component: MasterLayoutComponent,
    loadChildren: () => import('./cases/tag/tag.routes').then((c) => c.routes),
  },
  {
    path: 'text-area',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/text-area/text-area.routes').then((c) => c.routes),
  },
  {
    path: 'text-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/text-box/text-box.routes').then((c) => c.routes),
  },
  {
    path: '**',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./shared/layout/not-found.component.html/not-found.routes').then(
        (c) => c.routes
      ),
  },
];
