import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'music-player',
    loadComponent: () =>
      import('./must-player/music-player.component').then(
        (e) => e.MusicPlayerComponent
      ),
  },
];
