import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'asynchronous-process', pathMatch: 'full' },
  {
    path: 'asynchronous-process',
    loadComponent: () =>
      import('./asynchronous-process/asynchronous-process.component').then((e) => e.AsynchronousProcesseDecoratorComponent),
  },
];
