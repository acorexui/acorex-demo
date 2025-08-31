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
];
