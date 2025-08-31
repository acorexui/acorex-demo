import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'accordion-mode',
    loadComponent: () =>
      import('./accordion-mode/accordion-mode.component').then(
        (e) => e.AccordionModeComponent
      ),
  },
  {
    path: 'without-toggle-button',
    loadComponent: () =>
      import('./without-toggle-button/without-toggle-button.component').then(
        (e) => e.WithoutToggleButtonComponent
      ),
  },
];
