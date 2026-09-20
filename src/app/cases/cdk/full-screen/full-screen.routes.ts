import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'browser-mode',
    loadComponent: () =>
      import('./browser-mode/browser-mode.component').then(
        (e) => e.BrowserModeComponent,
      ),
  },
  {
    path: 'decorator-button',
    loadComponent: () =>
      import('./decorator-button/decorator-button.component').then(
        (e) => e.DecoratorButtonComponent,
      ),
  },
];
