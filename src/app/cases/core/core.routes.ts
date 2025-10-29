import { Routes } from '@angular/router';
import { MasterLayoutComponent } from '../../shared/layout/master-layout/master-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'constants', pathMatch: 'full' },
  {
    path: 'constants',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./constants/constants.routes').then((e) => e.routes),
  },
];
