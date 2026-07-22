import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dropdown-panel', pathMatch: 'full' },
  {
    path: 'dropdown-panel',
    loadComponent: () =>
      import('./dropdown-panel/dropdown-panel.component').then(
        (e) => e.DropdownPanelComponent
      ),
  },
  {
    path: 'dropdown-box',
    loadComponent: () =>
      import('./dropdown-box/dropdown-box.component').then(
        (e) => e.DropdownBoxComponent
      ),
  },
];
