import { Route } from '@angular/router';
import { MasterLayoutComponent } from './shared/layout/master-layout/master-layout.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'action-sheet/list-item', pathMatch: 'full' },
  {
    path: 'action-sheet',
    component: MasterLayoutComponent,
    loadChildren: () => import('./cases/action-sheet/action-sheet.routes').then((c) => c.routes),
  },
];
