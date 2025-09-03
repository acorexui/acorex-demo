import { Routes } from '@angular/router';
import { MasterLayoutComponent } from '../../shared/layout/master-layout/master-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'drag-drop', pathMatch: 'full' },
  {
    path: 'drag-drop',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./drag-drop/drag-drop.routes').then((c) => c.routes),
  },
  {
    path: 'carousel',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./carousel/carousel.routes').then((c) => c.routes),
  },
  {
    path: 'accordion',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./accordion/accordion.routes').then((c) => c.routes),
  },
  {
    path: 'drawer',
    component: MasterLayoutComponent,
    loadChildren: () => import('./drawer/drawer.routes').then((c) => c.routes),
  },
  {
    path: 'focus-trap',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./focus-trap/focus-trap.routes').then((c) => c.routes),
  },
  {
    path: 'input-mask',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./input-mask/input-mask.routes').then((c) => c.routes),
  },
  {
    path: 'list-navigation',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./list-navigation/list-navigation.routes').then((c) => c.routes),
  },
];
