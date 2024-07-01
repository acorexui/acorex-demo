import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'length',
    loadComponent: () =>
      import('./length/length.component').then((e) => e.LengthComponent),
  },
  {
    path: 'copy-paste',
    loadComponent: () =>
      import('./copy-paste/copy-paste.component').then(
        (e) => e.CopyPasteComponent
      ),
  },
  {
    path: 'validation',
    loadComponent: () =>
      import('./validation/validation.component').then(
        (e) => e.ValidationComponent
      ),
  },
];
