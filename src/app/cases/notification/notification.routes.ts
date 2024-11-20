import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'asynchronous-process',
    loadComponent: () =>
      import('./asynchronous-process/asynchronous-process.component').then(
        (e) => e.AsynchronousProcesseDecoratorComponent
      ),
  },
];
