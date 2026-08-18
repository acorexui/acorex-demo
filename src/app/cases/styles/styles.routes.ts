import { Routes } from '@angular/router';
import { MasterLayoutComponent } from '../../shared/layout/master-layout/master-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'appearance', pathMatch: 'full' },
  {
    path: 'appearance',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./appearance/appearance.routes').then((c) => c.routes),
  },
];
