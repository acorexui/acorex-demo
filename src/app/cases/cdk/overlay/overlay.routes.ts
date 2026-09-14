import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'anchor-positioning',
    loadComponent: () =>
      import('./anchor-positioning/anchor-positioning.component').then(
        (e) => e.AnchorPositioningComponent,
      ),
  },
  {
    path: 'centered',
    loadComponent: () =>
      import('./centered/centered.component').then((e) => e.CenteredComponent),
  },
  {
    path: 'visual-context',
    loadComponent: () =>
      import('./visual-context/visual-context.component').then(
        (e) => e.VisualContextComponent,
      ),
  },
];
