import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'usage', pathMatch: 'full' },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((e) => e.UsageComponent),
  },

  {
    path: 'activated-mode',
    loadComponent: () =>
      import('./activated-state/activated-state.component').then(
        (e) => e.ActivatedStateComponent
      ),
  },

  {
    path: 'disabled-mode',
    loadComponent: () =>
      import('./disabled-state/disabled-state.component').then(
        (e) => e.DisabledStateComponent
      ),
  },

  {
    path: 'icon-mode',
    loadComponent: () =>
      import('./icon-mode/icon-mode.component').then(
        (e) => e.IconModeComponent
      ),
  },
  {
    path: 'custom-divider',
    loadComponent: () =>
      import('./custom-divider/custom-divider.component').then(
        (e) => e.CustomDividerComponent
      ),
  },
  {
    path: 'prefix-suffix',
    loadComponent: () =>
      import('./prefix-suffix/prefix-suffix.component').then(
        (e) => e.PrefixSuffixComponent
      ),
  },
  {
    path: 'dynamic-async',
    loadComponent: () =>
      import('./dynamic-async/dynamic-async.component').then(
        (e) => e.DynamicAsyncComponent
      ),
  },
  {
    path: 'overflow-scroll',
    loadComponent: () =>
      import('./overflow-scroll/overflow-scroll.component').then(
        (e) => e.OverflowScrollComponent
      ),
  },
  {
    path: 'disabled-change',
    loadComponent: () =>
      import('./disabled-change/disabled-change.component').then(
        (e) => e.DisabledChangeComponent
      ),
  },
  {
    path: 'long-labels-tooltip',
    loadComponent: () =>
      import('./long-labels-tooltip/long-labels-tooltip.component').then(
        (e) => e.LongLabelsTooltipComponent
      ),
  },
];
