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
  {
    path: 'custom-content',
    loadComponent: () =>
      import('./custom-content/custom-content.component').then(
        (e) => e.CustomContentComponent
      ),
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./locations/locations.component').then(
        (e) => e.LocationsComponent
      ),
  },
  {
    path: 'timeout-progress',
    loadComponent: () =>
      import('./timeout-progress/timeout-progress.component').then(
        (e) => e.TimeoutProgressComponent
      ),
  },
  {
    path: 'interactive-features',
    loadComponent: () =>
      import('./interactive-features/interactive-features.component').then(
        (e) => e.InteractiveFeaturesComponent
      ),
  },
];
