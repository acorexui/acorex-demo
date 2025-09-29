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
  {
    path: 'modes',
    loadComponent: () =>
      import('./modes/modes.component').then((e) => e.ModesComponent),
  },
  {
    path: 'steps',
    loadComponent: () =>
      import('./steps/steps.component').then((e) => e.StepsComponent),
  },
  {
    path: 'snap-modes',
    loadComponent: () =>
      import('./snap-modes/snap-modes.component').then(
        (e) => e.SnapModesComponent
      ),
  },
  {
    path: 'tooltip-modes',
    loadComponent: () =>
      import('./tooltip-modes/tooltip-modes.component').then(
        (e) => e.TooltipModesComponent
      ),
  },
  {
    path: 'colors',
    loadComponent: () =>
      import('./colors/colors.component').then((e) => e.ColorsComponent),
  },
  {
    path: 'states',
    loadComponent: () =>
      import('./states/states.component').then((e) => e.StatesComponent),
  },
  {
    path: 'ranges',
    loadComponent: () =>
      import('./ranges/ranges.component').then((e) => e.RangesComponent),
  },
  {
    path: 'snap-labels',
    loadComponent: () =>
      import('./snap-labels/snap-labels.component').then(
        (e) => e.SnapLabelsComponent
      ),
  },
];
