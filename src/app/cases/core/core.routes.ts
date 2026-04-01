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
  {
    path: 'image',
    component: MasterLayoutComponent,
    loadChildren: () => import('./image/image.routes').then((e) => e.routes),
  },
  {
    path: 'date-time',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./date and time/date-time.routes').then((e) => e.routes),
  },
  {
    path: 'event',
    component: MasterLayoutComponent,
    loadChildren: () => import('./event/event.routes').then((e) => e.routes),
  },
  {
    path: 'format',
    component: MasterLayoutComponent,
    loadChildren: () => import('./format/format.routes').then((e) => e.routes),
  },
  {
    path: 'icon',
    component: MasterLayoutComponent,
    loadChildren: () => import('./icon/icon.routes').then((e) => e.routes),
  },
  {
    path: 'file',
    component: MasterLayoutComponent,
    loadChildren: () => import('./file/file.routes').then((e) => e.routes),
  },
  {
    path: 'locale',
    component: MasterLayoutComponent,
    loadChildren: () => import('./locale/locale.routes').then((e) => e.routes),
  },
  {
    path: 'memoize',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./memoize/memoize.routes').then((e) => e.routes),
  },
  {
    path: 'network',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./network/network.routes').then((e) => e.routes),
  },
  {
    path: 'pipes',
    component: MasterLayoutComponent,
    loadChildren: () => import('./pipes/pipes.routes').then((e) => e.routes),
  },
  {
    path: 'platform',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./platform/platform.routes').then((e) => e.routes),
  },
  {
    path: 'storage',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./storage/storage.routes').then((e) => e.routes),
  },
  {
    path: 'translation',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./translation/translation.routes').then((e) => e.routes),
  },
  {
    path: 'utils',
    component: MasterLayoutComponent,
    loadChildren: () => import('./utils/utils.routes').then((e) => e.routes),
  },
  {
    path: 'validation',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./validation/validation.routes').then((e) => e.routes),
  },
];
