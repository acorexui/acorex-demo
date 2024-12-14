import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'signature-box',
    loadComponent: () =>
      import('./signature-box/signature-box.component').then(
        (e) => e.SignatureBoxComponent
      ),
  },
];
