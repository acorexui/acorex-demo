import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'views',
    loadComponent: () =>
      import('./views/views.component').then((e) => e.ViewsComponent),
  },
  {
    path: 'calendar-types',
    loadComponent: () =>
      import('./calendar-types/calendar-types.component').then(
        (e) => e.CalendarTypesComponent
      ),
  },
  {
    path: 'working-hours',
    loadComponent: () =>
      import('./working-hours/working-hours.component').then(
        (e) => e.WorkingHoursComponent
      ),
  },
  {
    path: 'drag-drop',
    loadComponent: () =>
      import('./drag-drop/drag-drop.component').then(
        (e) => e.DragDropComponent
      ),
  },
  {
    path: 'event-handling',
    loadComponent: () =>
      import('./event-handling/event-handling.component').then(
        (e) => e.EventHandlingComponent
      ),
  },
  {
    path: 'readonly',
    loadComponent: () =>
      import('./readonly/readonly.component').then((e) => e.ReadonlyComponent),
  },
  {
    path: 'custom-templates',
    loadComponent: () =>
      import('./custom-templates/custom-templates.component').then(
        (e) => e.CustomTemplatesComponent
      ),
  },
  {
    path: 'data-loading',
    loadComponent: () =>
      import('./data-loading/data-loading.component').then(
        (e) => e.DataLoadingComponent
      ),
  },
  {
    path: 'holidays',
    loadComponent: () =>
      import('./holidays/holidays.component').then((e) => e.HolidaysComponent),
  },
  {
    path: 'responsive',
    loadComponent: () =>
      import('./responsive/responsive.component').then(
        (e) => e.ResponsiveComponent
      ),
  },
  {
    path: 'custom-header',
    loadComponent: () =>
      import('./custom-header/custom-header.component').then(
        (e) => e.CustomHeaderComponent
      ),
  },
  {
    path: 'actions',
    loadComponent: () =>
      import('./actions/actions.component').then((e) => e.ActionsComponent),
  },
  {
    path: 'current-time-indicator',
    loadComponent: () =>
      import('./current-time-indicator/current-time-indicator.component').then(
        (e) => e.CurrentTimeIndicatorComponent
      ),
  },
  {
    path: 'resources',
    loadComponent: () =>
      import('./resources/resources.component').then((e) => e.ResourcesComponent),
  },
];
