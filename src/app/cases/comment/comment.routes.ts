import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'comment-input-type',
    loadComponent: () =>
      import('./comment-input-type/comment-input-type.component').then(
        (e) => e.CommentInputTypeComponent
      ),
  },
];
