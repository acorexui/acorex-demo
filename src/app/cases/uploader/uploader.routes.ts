import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'feature-title',
    loadComponent: () =>
      import('./feature-title/feature-title.component').then(
        (e) => e.FeatureTitleComponent
      ),
  },
  {
    path: 'drag-drop-zone',
    loadComponent: () =>
      import('./drag-drop-zone/drag-drop-zone.component').then(
        (e) => e.DragDropZoneComponent
      ),
  },
  // {
  //   path: 'file-list',
  //   loadComponent: () =>
  //     import('./file-list/file-list.component').then(
  //       (e) => e.FileListComponent
  //     ),
  // },
  // {
  //   path: 'dialog-container',
  //   loadComponent: () =>
  //     import('./dialog-container/dialog-container.component').then(
  //       (e) => e.DialogContainerComponent
  //     ),
  // },
  {
    path: 'zone-directive',
    loadComponent: () =>
      import('./zone-directive/zone-directive.component').then(
        (e) => e.ZoneDirectiveComponent
      ),
  },
  {
    path: 'browse-handle',
    loadComponent: () =>
      import('./browse-handle/browse-handle.component').then(
        (e) => e.BrowseHandleComponent
      ),
  },
  {
    path: 'service-integration',
    loadComponent: () =>
      import('./service-integration/service-integration.component').then(
        (e) => e.ServiceIntegrationComponent
      ),
  },
  {
    path: 'custom-template',
    loadComponent: () =>
      import('./custom-template/custom-template.component').then(
        (e) => e.CustomTemplateComponent
      ),
  },
];
