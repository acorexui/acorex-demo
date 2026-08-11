import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'usage' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((m) => m.UsageComponent),
  },
  {
    path: 'multi-select',
    loadComponent: () =>
      import('./multi-select/multi-select.component').then(
        (m) => m.MultiSelectComponent
      ),
  },
  {
    path: 'drop-down-tree',
    loadComponent: () =>
      import('./drop-down-tree/drop-down-tree.component').then(
        (m) => m.DropDownTreeComponent
      ),
  },
  {
    path: 'multi-select-tree',
    loadComponent: () =>
      import('./multi-select-tree/multi-select-tree.component').then(
        (m) => m.MultiSelectTreeComponent
      ),
  },
  {
    path: 'multi-column',
    loadComponent: () =>
      import('./multi-column/multi-column.component').then(
        (m) => m.MultiColumnComponent
      ),
  },
  {
    path: 'virtual-scroll',
    loadComponent: () =>
      import('./virtual-scroll/virtual-scroll.component').then(
        (m) => m.VirtualScrollComponent
      ),
  },
  {
    path: 'remote-datasource',
    loadComponent: () =>
      import('./remote-datasource/remote-datasource.component').then(
        (m) => m.RemoteDatasourceComponent
      ),
  },
  {
    path: 'value-items',
    loadComponent: () =>
      import('./value-items/value-items.component').then(
        (m) => m.ValueItemsComponent
      ),
  },
  {
    path: 'api-search',
    loadComponent: () =>
      import('./api-search/api-search.component').then(
        (m) => m.ApiSearchComponent
      ),
  },
  {
    path: 'api-tree',
    loadComponent: () =>
      import('./api-tree/api-tree.component').then((m) => m.ApiTreeComponent),
  },
  {
    path: 'custom-templates',
    loadComponent: () =>
      import('./custom-templates/custom-templates.component').then(
        (m) => m.CustomTemplatesComponent
      ),
  },
  {
    path: 'custom-header-footer',
    loadComponent: () =>
      import('./custom-header-footer/custom-header-footer.component').then(
        (m) => m.CustomHeaderFooterComponent
      ),
  },
  {
    path: 'custom-empty-template',
    loadComponent: () =>
      import('./custom-empty-template/custom-empty-template.component').then(
        (m) => m.CustomEmptyTemplateComponent
      ),
  },
];
