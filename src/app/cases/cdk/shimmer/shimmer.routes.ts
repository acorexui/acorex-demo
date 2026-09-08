import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.usageComponent),
  },{
    path: 'custom-color',
    loadComponent: () =>
      import('./custom-color/custom-color.component').then((e) => e.customColorComponent),
  },{
    path: 'disable',
    loadComponent: () =>
      import('./disable/disable.component').then((e) => e.disableComponent),
  },{
    path: 'play-once',
    loadComponent: () =>
      import('./play-once/play-once.component').then((e) => e.playOnceComponent),
  },
];
