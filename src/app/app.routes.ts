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
    path: 'badge',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/badge/badge.routes').then((c) => c.routes),
  },
  {
    path: 'breadcrumb',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/breadcrumb/breadcrumb.routes').then((c) => c.routes),
  },
  {
    path: 'button-group',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/button-group/button-group.routes').then((c) => c.routes),
  },
  {
    path: 'chips',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/chips/chips.routes').then((c) => c.routes),
  },
  {
    path: 'color-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/color-box/color-box.routes').then((c) => c.routes),
  },
  {
    path: 'drawer',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/drawer/drawer.routes').then((c) => c.routes),
  },
  {
    path: 'image',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/image/image.routes').then((c) => c.routes),
  },
  {
    path: 'loading',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/loading/loading.routes').then((c) => c.routes),
  },
];
