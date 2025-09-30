import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'free-mode',
    loadComponent: () =>
      import('./free-mode/free-mode.component').then((e) => e.FreeModeComponent),
  },
  {
    path: 'zoom-controls',
    loadComponent: () =>
      import('./zoom-controls/zoom-controls.component').then((e) => e.ZoomControlsComponent),
  },
  {
    path: 'model-properties',
    loadComponent: () =>
      import('./model-properties/model-properties.component').then((e) => e.ModelPropertiesComponent),
  },
];
