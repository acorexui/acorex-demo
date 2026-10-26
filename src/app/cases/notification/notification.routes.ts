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
        (e) => e.AsynchronousProcesseDecoratorComponent,
      ),
  },
  {
    path: 'custom-content',
    loadComponent: () =>
      import('./custom-content/custom-content.component').then(
        (e) => e.CustomContentComponent,
      ),
  },
  {
    path: 'custom-icon',
    loadComponent: () =>
      import('./custom-icon/custom-icon.component').then(
        (e) => e.NotificationCustomIconComponent,
      ),
  },
  {
    path: 'dynamic-buttons',
    loadComponent: () =>
      import('./dynamic-buttons/dynamic-buttons.component').then(
        (e) => e.DynamicButtonsComponent,
      ),
  },
  {
    path: 'hide-all',
    loadComponent: () =>
      import('./hide-all/hide-all.component').then((e) => e.HideAllComponent),
  },
  {
    path: 'loading-buttons',
    loadComponent: () =>
      import('./loading-buttons/loading-buttons.component').then(
        (e) => e.LoadingButtonsComponent,
      ),
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./locations/locations.component').then(
        (e) => e.LocationsComponent,
      ),
  },
  {
    path: 'multi-step-process',
    loadComponent: () =>
      import('./multi-step-process/multi-step-process.component').then(
        (e) => e.MultiStepProcessComponent,
      ),
  },
  {
    path: 'programmatic-control',
    loadComponent: () =>
      import('./programmatic-control/programmatic-control.component').then(
        (e) => e.ProgrammaticControlComponent,
      ),
  },
  {
    path: 'timeout-progress',
    loadComponent: () =>
      import('./timeout-progress/timeout-progress.component').then(
        (e) => e.TimeoutProgressComponent,
      ),
  },
];
