import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'vertical',
    loadComponent: () =>
      import('./vertical/vertical.component').then((e) => e.VerticalComponent),
  },
  {
    path: 'music-player',
    loadComponent: () =>
      import('./music-player/music-player.component').then(
        (e) => e.MusicPlayerComponent
      ),
  },
];
