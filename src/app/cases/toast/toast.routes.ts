import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },
  {
    path: 'color-variants',
    loadComponent: () =>
      import('./color-variants/color-variants.component').then((e) => e.ColorVariantsComponent),
  },
  {
    path: 'service-methods',
    loadComponent: () =>
      import('./service-methods/service-methods.component').then((e) => e.ServiceMethodsComponent),
  },
  {
    path: 'positioning',
    loadComponent: () =>
      import('./positioning/positioning.component').then((e) => e.PositioningComponent),
  },
  {
    path: 'timeout-progress',
    loadComponent: () =>
      import('./timeout-progress/timeout-progress.component').then((e) => e.TimeoutProgressComponent),
  },
  {
    path: 'close-buttons',
    loadComponent: () =>
      import('./close-buttons/close-buttons.component').then((e) => e.CloseButtonsComponent),
  },
  {
    path: 'icon-customization',
    loadComponent: () =>
      import('./icon-customization/icon-customization.component').then((e) => e.IconCustomizationComponent),
  },
  {
    path: 'pause-hover',
    loadComponent: () =>
      import('./pause-hover/pause-hover.component').then((e) => e.PauseHoverComponent),
  },
  {
    path: 'config-override',
    loadComponent: () =>
      import('./config-override/config-override.component').then((e) => e.ConfigOverrideComponent),
  },
  {
    path: 'translation',
    loadComponent: () =>
      import('./translation/translation.component').then((e) => e.TranslationComponent),
  },
];
