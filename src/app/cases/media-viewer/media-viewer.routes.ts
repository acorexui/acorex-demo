import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'imageviewing',
    loadComponent: () =>
      import('./imageviewing/image.component').then((e) => e.ImageComponent),
  },
  {
    path: 'videoplay',
    loadComponent: () =>
      import('./videoplay/video.component').then((e) => e.VideoComponent),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then((e) => e.GalleryComponent),
  },
];
