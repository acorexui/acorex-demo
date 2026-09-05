import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'configuration',
    loadComponent: () =>
      import('./configuration/configuration.component').then((e) => e.configurationComponent),
  },
  {
    path: 'playback-controls',
    loadComponent: () =>
      import('./playback-controls/playback-controls.component').then((e) => e.playbackcontrolsComponent),
  },
];
