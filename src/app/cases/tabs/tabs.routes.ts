import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'decoration', pathMatch: 'full' },
  {
    path: 'decoration',
    loadComponent: () =>
      import('./decoration/decoration.component').then(
        (e) => e.DecorationComponent
      ),
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'custom-template',
    loadComponent: () =>
      import('./custom-template/custom-template.component').then(
        (e) => e.CustomTemplateComponent
      ),
  },
  {
    path: 'tab-with-content',
    loadComponent: () =>
      import('./tab-with-content/tab-with-content.component').then(
        (e) => e.TabWithContentComponent
      ),
  },
  {
    path: 'look-variants',
    loadComponent: () =>
      import('./look-variants/look-variants.component').then(
        (e) => e.LookVariantsComponent
      ),
  },
  {
    path: 'location-variants',
    loadComponent: () =>
      import('./location-variants/location-variants.component').then(
        (e) => e.LocationVariantsComponent
      ),
  },
  {
    path: 'disabled-state',
    loadComponent: () =>
      import('./disabled-state/disabled-state.component').then(
        (e) => e.DisabledStateComponent
      ),
  },
  {
    path: 'event-handling',
    loadComponent: () =>
      import('./event-handling/event-handling.component').then(
        (e) => e.EventHandlingComponent
      ),
  },
];
