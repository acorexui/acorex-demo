import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then(
        (e) => e.DropdownButtonUsageComponent
      ),
  },
  {
    path: 'dropdown-mode',
    loadComponent: () =>
      import('./dropdown-mode/dropdown-mode.component').then(
        (c) => c.DropdownButtonDropdownModeComponent
      ),
  },
  {
    path: 'disabled',
    loadComponent: () =>
      import('./disabled/disabled.component').then(
        (c) => c.DropdownButtonDisabledComponent
      ),
  },
  {
    path: 'colors',
    loadComponent: () =>
      import('./colors/color.component').then(
        (c) => c.DropdownButtonColorsComponent
      ),
  },
  {
    path: 'look',
    loadComponent: () =>
      import('./Look/look.component').then(
        (c) => c.DropdownButtonLooksComponent
      ),
  },
  {
    path: 'size',
    loadComponent: () =>
      import('./size/size.component').then(
        (c) => c.DropdownButtonSizesComponent
      ),
  },
];
